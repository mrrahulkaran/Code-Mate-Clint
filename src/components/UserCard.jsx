import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  console.log(user);
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
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
    <div className='card bg-base-300 w-96 shadow-xl'>
      <figure>
        <img src={photoUrl} alt='photo' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className='card-actions justify-center my-4'>
          <button
            className='btn btn-outline hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-200'
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>

          <button
            className='btn btn-outline hover:bg-red-500 hover:text-white hover:scale-105 transition-all duration-200'
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
