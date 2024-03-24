import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailsEvent() {
  const [publishError, setPublishError] = useState(null);
  const [formData, setFormData] = useState({});
  const { EventtId } = useParams();
  console.log(formData);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchEvent = async () => {
        const res = await fetch(`/api/event/getEvent?eventId=${EventtId}`);
        const data = await res.json();
        console.log("data", data);

        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          const selectedEvent = data.Eventt.find(
            (Event) => Event._id === EventtId
          );
          if (selectedEvent) {
            setFormData(selectedEvent);
            console.log(selectedEvent);
          }
        }
      };
      fetchEvent();
    } catch (error) {
      console.log(error.message);
    }
  }, [EventtId]);

  return (
    <div className="flex justify-center items-center">
      <div className=" mt-5 ">
        <div className="max-w-[800px] break-words  font-serif text-5xl text-slate-900 ">{formData.name}</div>

        <div>
          {" "}
          <img
            src={formData.image}
            className="w-[900px] h-[500px] object-cover bg-gray-500 rounded-lg mt-4 "
          />
        </div>
        <div className="max-w-[900px] break-words  mt-4 mb-16">{formData.desc}</div>
      </div>
    </div>
  );
}
