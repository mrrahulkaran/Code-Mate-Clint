import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return null;

  if (connections.length === 0)
    return (
      <div className='flex items-center justify-center min-h-[60vh] text-gray-600 text-xl font-semibold'>
        No Connections Found
      </div>
    );

  return (
    <div className='max-w-5xl mx-auto my-12 px-4'>
      <h1 className='text-center text-4xl font-extrabold text-gray-900 mb-12'>
        Connections
      </h1>

      <div className='flex flex-col gap-6'>
        {connections.map((connection) => {
          if (!connection || !connection._id) return null;

          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            connection;

          return (
            <div
              key={_id}
              className='flex items-center p-6 rounded-xl bg-white shadow hover:shadow-lg transition-shadow'
            >
              <img
                alt={`${firstName} ${lastName}`}
                className='w-20 h-20 rounded-full object-cover border-2 border-blue-500'
                src={photoUrl}
                loading='lazy'
              />
              <div className='flex-1 ml-6 text-left'>
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
              <Link to={`/chat/${_id}`}>
                <button className='btn btn-primary px-6 py-2 rounded-md font-semibold hover:scale-105 transition-transform'>
                  Chat
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
