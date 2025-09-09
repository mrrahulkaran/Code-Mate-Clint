import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants.js";
import { useNavigate, useLocation } from "react-router-dom";

console.log(BASE_URL);

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
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 text-gray-900'>
      <Navbar />
      <main className='flex-1 container mx-auto px-4 py-8 max-w-5xl w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Body;
