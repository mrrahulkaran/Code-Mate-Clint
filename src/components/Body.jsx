import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants.js";
import { useNavigate } from "react-router-dom";

console.log(BASE_URL);

function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      console.error("Error fetching user:", error);
      if (error.response && error.response.status === 401) {
        // User is not authenticated
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer className='mt-auto' />
    </div>
  );
}

export default Body;
