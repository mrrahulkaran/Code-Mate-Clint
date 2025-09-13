// UserCard.jsx
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const [exiting, setExiting] = useState(false);

  if (!user)
    return (
      <div className='flex justify-center items-center h-40 text-lg font-semibold text-red-600 '>
        Oops! No User Found
      </div>
    );

  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const animateAndRemove = (status, userId) => {
    setExiting(true);
    setTimeout(() => {
      handleSendRequest(status, userId);
    }, 300); // Match CSS animation time
  };

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error("Error in sending request:", err);
      setExiting(false); // Reset animation state on error
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideOut {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(-100%); }
          }
          .animate-slideIn {
            animation: slideIn 0.3s ease forwards;
          }
          .animate-slideOut {
            animation: slideOut 0.3s ease forwards;
          }
        `}
      </style>
      <article
        className={`w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 item-center ${
          exiting ? "animate-slideOut" : "animate-slideIn"
        }`}
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
            <button
              className='flex-1 py-3 rounded-full border border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition-transform duration-200 active:scale-95'
              onClick={() => animateAndRemove("intrested", _id)}
              aria-label={`Express interest in ${firstName} ${lastName}`}
            >
              Interested
            </button>
            <button
              className='flex-1 py-3 rounded-full border border-red-500 text-red-600 font-semibold hover:bg-red-500 hover:text-white transition-transform duration-200 active:scale-95'
              onClick={() => animateAndRemove("ignored", _id)}
              aria-label={`Ignore ${firstName} ${lastName}`}
            >
              Ignore
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default UserCard;
