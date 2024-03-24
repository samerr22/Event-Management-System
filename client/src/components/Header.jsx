import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSilce";

export default function () {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-blue-700 mt-28 rounded-full">
      <div className=" flex justify-between items-center mr-10 max-w-6xl mx-auto p-3">
        <ul className="flex justify-center items-center gap-16">
          <Link to="/">
            <li className="text-white font-serif">Home</li>
          </Link>
          <Link to="/event">
            <li className="text-white font-serif">Events</li>
          </Link>
          <Link to="/">
            <li className="text-white font-serif">Reservation</li>
          </Link>
          <Link to="/">
            <li className="text-white font-serif">About Us</li>
          </Link>
          <Link to="/">
            <li className="text-white font-serif">Profile</li>
          </Link>
          <Link to="/">
            <li className="text-white font-serif">FeedBack</li>
          </Link>
          <Link to="/event">
            <li className="text-white font-serif">Past Events</li>
          </Link>

          {currentUser ? (
            <span onClick={handleSignout} className="cursor-pointer">
              Sign Out
            </span>
          ) : (
            <Link to="/sign-in">
              <li>Sing In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
