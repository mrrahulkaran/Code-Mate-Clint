import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants.js";
const Login = () => {
  const [emailId, setEmailId] = useState("rahulkaran@gmail.com");
  const [password, setPassword] = useState("Rahul@1234");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (err) {
      setErrorMessage(err.response?.data || "Login failed");
      console.error("Login failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className='flex justify-center items-center my-20'>
      <div className='card bg-base-300 w-96 shadow-xl transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl rounded-box glass'>
        <div className='card-body backdrop-blur'>
          <h2 className='card-title justify-center text-bold'>Login</h2>
          <div>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>Email ID</span>
              </div>
              <input
                type='text'
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
              />
            </label>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>Password</span>
              </div>
              <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
              />
            </label>
          </div>
          <p className='text-red-500'>{errorMessage}</p>
          <div className='card-actions justify-center mt-4'>
            <button className='btn btn-primary' onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
