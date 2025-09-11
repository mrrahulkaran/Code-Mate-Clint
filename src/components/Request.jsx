import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error("Error reviewing request:", err);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/request/recived`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data));
    } catch (err) {
      console.error("Error fetching requests:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return null;

  if (!requests.data || requests.data.length === 0)
    return (
      <div className='flex justify-center items-center min-h-[60vh] text-gray-600 text-xl font-semibold'>
        No Requests Found
      </div>
    );

  return (
    <div className='max-w-5xl mx-auto my-12 px-4'>
      <h1 className='text-center text-4xl font-extrabold text-gray-900 mb-12'>
        Connection Requests
      </h1>

      <div className='flex flex-col gap-6'>
        {requests.data.map(({ _id, senderId }) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            senderId;

          return (
            <div
              key={_id}
              className='flex flex-col sm:flex-row items-center sm:items-start justify-between p-4 sm:p-6 rounded-xl bg-white shadow hover:shadow-lg transition-shadow gap-4'
            >
              <img
                alt={`${firstName} ${lastName}`}
                className='w-20 h-20 rounded-full object-cover border-2 border-blue-500 mx-auto sm:mx-0'
                src={photoUrl}
                loading='lazy'
              />
              <div className='flex-1 w-full sm:mx-6 text-center sm:text-left'>
                <h2 className='font-semibold text-2xl text-gray-800 truncate'>
                  {firstName} {lastName}
                </h2>
                {age && gender && (
                  <p className='mt-1 text-gray-600'>
                    {age}, {gender}
                  </p>
                )}
                <p className='mt-2 text-gray-500 line-clamp-2'>{about}</p>
              </div>
              <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
                <button
                  className='btn px-5 py-2 rounded-md font-semibold transition-colors duration-200 w-full sm:w-auto bg-white border border-red-500 text-red-600 hover:bg-red-600 hover:text-white'
                  onClick={() => reviewRequest("rejected", _id)}
                >
                  Reject
                </button>
                <button
                  className='btn px-5 py-2 rounded-md font-semibold transition-colors duration-200 w-full sm:w-auto bg-white border border-green-600 text-green-700 hover:bg-green-600 hover:text-white'
                  onClick={() => reviewRequest("accsepted", _id)}
                >
                  Accept
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
