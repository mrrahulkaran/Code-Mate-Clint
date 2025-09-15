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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 text-gray-900 relative overflow-hidden'>
      <FloatingBlobsBackground />
      <Navbar />
      <main className='flex-1 container mx-auto px-4 py-8 max-w-5xl w-full relative z-10'>
        <Outlet />
      </main>
      <div className='relative z-10'>
        <Footer />
      </div>
    </div>
  );
}

export default Body;
