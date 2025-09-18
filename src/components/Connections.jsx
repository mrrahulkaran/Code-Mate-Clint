import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
      setLoaded(true);
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
    <div className='relative max-w-5xl mx-auto my-12 px-4 overflow-hidden'>
      <div className='animated-bg-connections'></div>

      <h1 className='text-center text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text drop-shadow-lg mb-12 mt-4'>
        Connections
      </h1>

      <div
        className={`flex flex-col gap-6 opacity-0 animate-fade-in-up ${
          loaded ? "opacity-100" : ""
        }`}
      >
        {connections.map((connection) => {
          if (!connection || !connection._id) return null;

          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            connection;

          return (
            <div
              key={_id}
              className='flex items-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300'
            >
              <img
                alt={`${firstName} ${lastName}`}
                className='w-20 h-20 rounded-full object-cover border-2 border-blue-500 flex-shrink-0'
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

      <style>{`
        /* Animated gradient background for connections page */
        .animated-bg-connections {
          position: fixed;
          inset: 100px 0 0 0; /* start below navbar */
          z-index: -1;
          background: linear-gradient(45deg, #dbf0ff, #cfeeef, #dae6ff, #dbf0ff);
          background-size: 400% 400%;
          animation: gradientMoveConnections 15s ease-in-out infinite;
        }
        @keyframes gradientMoveConnections {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Smooth fade-in up animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Connections;
