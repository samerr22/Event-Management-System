import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Feedback() {
  const { currentUser } = useSelector((state) => state.user);

  const [Event, setEvent] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [EventdeleteId, setEvntdelteId] = useState("");
  const [filtereEvent, setfiltereEvent] = useState([]);
  const [query, setQuery] = useState(" ");
  console.log(filtereEvent);

  console.log("arra", Event);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`/api/event/getEvent`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setEvent(data.Eventt);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchItems();
  }, []);

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`/api/event/deleteEvent/${EventdeleteId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setEvent((prev) => prev.filter((Event) => Event._id !== EventdeleteId));
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //search funtion
  useEffect(() => {
    if (query.trim() === "") {
      // If the query is empty, display all data
      setfiltereEvent([...Event]);
    } else {
      // If there's a query, filter the data
      const filteredData = Event.filter(
        (Event) =>
          Event.name && Event.name.toLowerCase().includes(query.toLowerCase())
      );
      setfiltereEvent(filteredData);
    }
  }, [query, Event]);

  return (
    <div>
      <div>
        <div className="ml-8 mt-7 flex justify-center items-center">
          <form>
            <input
              type="text"
              placeholder="Search... "
              className=" w-[300px] h-8 rounded-lg shadow-xl"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>

        <div className="flex justify-center items-center">
          {currentUser?.isEventManger && (
            <>
              <Link to="/create-post">
                <div className="flex justify-center items-center gap-2">
                  <button
                    className="hidden sm:inline  hover:underline bg-gradient-to-r from-[#230474] to-[#230474] via-blue-500 mt-8 text-white py-2 px-4  font-extralight rounded-full"
                    type="button"
                  >
                    Add Event
                  </button>
                </div>
              </Link>
            </>
          )}
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {filtereEvent && filtereEvent.length > 0 ? (
              <>
                {filtereEvent
                  .slice(0, showMore ? filtereEvent.length : 4)
                  .map((Event) => (
                    <div
                      key={Event._id}
                      className="w-[300px] h-[250px]  mt-10 mb-40 rounded  bg-gradient-to-r from-[#4108d3] to-[#4108d3] via-blue-500 shadow-3xl  "
                    >
                      <div className="px-6 py-4 ">
                        <div className="font-extralight text-xl mb-2 max-w-[100px] truncate w-48">
                          {Event.name}
                        </div>
                        <img
                          src={Event.image}
                          className="w-36 h-28 object-cover bg-gray-500 rounded-lg ml-14"
                        />
                        <Link to={`/details/${Event._id}`}>
                          <div className=" mt-8 ml-24">
                            <button className="hidden sm:inline  hover:underline bg-gradient-to-r from-[#230474] to-[#230474] via-blue-500 hover:bg-blue-800 text-white font-extralight  py-2 px-4  rounded-full cursor-pointer">
                              {" "}
                              Details
                            </button>
                          </div>
                        </Link>

                        {currentUser?.isEventManger && (
                          <>
                            <div className="flex justify-center items-center gap-8 mt-8">
                              <Link
                                to={`/update-Event/${Event._id}`}
                                className="hidden sm:inline  hover:underline bg-gradient-to-r from-[#230474] to-[#230474] via-blue-500 hover:bg-blue-800 text-white font-extralight  py-2 px-4  rounded-full cursor-pointer"
                              >
                                Edit
                              </Link>
                              <div>
                                <span
                                  onClick={() => {
                                    setEvntdelteId(Event._id);
                                    handleDeleteUser();
                                  }}
                                  className="hidden sm:inline  hover:underline bg-gradient-to-r from-[#230474] to-[#230474] via-blue-500 hover:bg-blue-800 text-white font-extralight py-2 px-4  rounded-full cursor-pointer"
                                >
                                  Delete
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}

                {!showMore && Event.length > 4 && (
                  <div className="mt-4 md:hidden sm:hidden lg:block mb-4 ml-[60px]">
                    <button
                      className="bg-gradient-to-r from-[#230474] to-[#230474] via-blue-500 hover:bg-blue-700 text-white font-extralight rounded"
                      onClick={() => setShowMore(true)}
                    >
                      Show More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p>You have no items yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
