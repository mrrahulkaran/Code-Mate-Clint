import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants.js";
import { useNavigate, useLocation } from "react-router-dom";

// New component for background blobs animation
const FloatingBlobsBackground = () => (
  <div className='blobs-bg fixed inset-0 -z-10 pointer-events-none'>
    <div className='blob blob1' />
    <div className='blob blob2' />
    <div className='blob blob3' />
  </div>
);

function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      console.error("Error fetching user:", error);
      if (error.response && error.response.status === 401) {
        if (location.pathname !== "/signup") {
          navigate("/login");
        }
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 text-gray-900 relative overflow-hidden'>
      <FloatingBlobsBackground />
      <Navbar />
      <main className='flex-1 container mx-auto px-4 py-8 max-w-5xl w-full'>
        <Outlet />
      </main>
      <Footer />
      <style>{`
        .blobs-bg {
          z-index: -10;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(88px);
          opacity: 0.4;
          animation: blobMove 15s infinite alternate ease-in-out;
          mix-blend-mode: screen;
        }
        .blob1 {
          width: 320px;
          height: 320px;
          background: #60a5fa;
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }
        .blob2 {
          width: 400px;
          height: 400px;
          background: #3b82f6;
          top: 40%;
          left: 60%;
          animation-delay: 3s;
        }
        .blob3 {
          width: 280px;
          height: 280px;
          background: #2563eb;
          top: 70%;
          left: 20%;
          animation-delay: 6s;
        }
        @keyframes blobMove {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(20px, 30px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}

export default Body;
