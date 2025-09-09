import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  if (!user)
    return (
      <div className='flex justify-center items-center h-40 text-lg font-semibold text-red-600 '>
        Oops! No User Found
      </div>
    );

  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error("Error sending request:", err);
    }
  };

  return (
    <article className='w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 item-center'>
      <div className='relative '>
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
        <p className='text-gray-600 mb-4 line-clamp-3'>{about}</p>
        <div className='flex gap-4 mt-auto'>
          <button
            className='flex-1 py-2 rounded-lg border border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition-transform duration-200 active:scale-95'
            onClick={() => handleSendRequest("intrested", _id)}
            aria-label={`Express interest in ${firstName} ${lastName}`}
          >
            Interested
          </button>
          <button
            className='flex-1 py-2 rounded-lg border border-red-500 text-red-600 font-semibold hover:bg-red-500 hover:text-white transition-transform duration-200 active:scale-95'
            onClick={() => handleSendRequest("ignored", _id)}
            aria-label={`Ignore ${firstName} ${lastName}`}
          >
            Ignore
          </button>
        </div>
      </div>
    </article>
  );
};
export default UserCard;
