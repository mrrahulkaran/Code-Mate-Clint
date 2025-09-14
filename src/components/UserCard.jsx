import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user, onRemove }) => {
  const [exiting, setExiting] = useState(false);
  const [slideDirection, setSlideDirection] = useState(""); // "left" or "right"
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 20);
    return () => clearTimeout(timer);
  }, []);

  if (!user) return <div>Oops! No User Found</div>;

  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

  const animateAndRemove = (status, userId) => {
    setSlideDirection(status === "intrested" ? "right" : "left");
    setExiting(true);
    setTimeout(() => {
      handleSendRequest(status, userId);
    }, 300);
  };

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
      if (onRemove) onRemove(userId);
    } catch (err) {
      console.error("Error in sending request:", err);
      setExiting(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(100%); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-100%); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease forwards;
        }
        .animate-slideOut-right {
          animation: slideOutRight 0.3s ease forwards;
        }
        .animate-slideOut-left {
          animation: slideOutLeft 0.3s ease forwards;
        }
        .usercard-hover:hover {
          transform: scale(1.04);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .usercard {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>
      <article
        className={`w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden 
          ${
            exiting
              ? slideDirection === "right"
                ? "animate-slideOut-right"
                : "animate-slideOut-left"
              : show
              ? "animate-slideIn"
              : ""
          }
          usercard usercard-hover
        `}
      >
        <div className='relative'>
          <img
            src={
              photoUrl ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
            alt={`${firstName} ${lastName}`}
            className='w-full h-64 object-cover rounded-t-2xl'
          />
          {age && gender && (
            <span
              className='absolute bottom-3 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow'
              aria-label='User age and gender'
            >
              {age} • {gender}
            </span>
          )}
        </div>
        <div className='p-6 flex flex-col'>
          <h2 className='text-xl font-bold text-gray-900 mb-2 truncate'>
            {firstName} {lastName}
          </h2>
          <p className='text-black mb-4 line-clamp-3'>
            {about ? about : "No bio provided."}
          </p>

          <div className='flex gap-6 justify-center mt-auto'>
            {/* Ignore button on the left */}
            <button
              className='flex-1 py-3 rounded-full border border-red-500 text-red-600 font-semibold hover:bg-red-500 hover:text-white transition-transform duration-200 active:scale-95'
              onClick={() => animateAndRemove("ignored", _id)}
              aria-label={`Ignore ${firstName} ${lastName}`}
            >
              Ignore
            </button>

            {/* Interested button on the right */}
            <button
              className='flex-1 py-3 rounded-full border border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition-transform duration-200 active:scale-95'
              onClick={() => animateAndRemove("intrested", _id)}
              aria-label={`Express interest in ${firstName} ${lastName}`}
            >
              Interested
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default UserCard;
