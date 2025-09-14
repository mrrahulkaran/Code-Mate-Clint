import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants.js";
import logo from "../utils/logo.png";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (err) {
      setErrorMessage(err.response?.data || "Login failed");
      console.error("Login failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className='relative min-h-screen flex justify-center items-center px-4 overflow-x-hidden'>
      <div className='animated-bg'></div>
      <div className='w-full max-w-md glass-bg shadow-2xl p-8 animated-fadein z-10'>
        <div className='flex flex-col gap-4'>
          {/* Branding */}
          <div className='flex justify-center items-center gap-2 mb-4'>
            <h2 className='text-3xl font-bold text-center text-blue-700 mb-2 drop-shadow-[0_1.5px_6px_rgb(59,130,246,.25)]'>
              Login to CodeMate
            </h2>
            <img
              src={logo}
              alt='DevTinder Logo'
              className='w-10 h-10 rounded-lg shadow-sm'
              draggable={false}
            />
          </div>
          {/* Subtitle */}
          <p className='text-center text-gray-500 mb-4'>
            Connect with top developers
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            {/* Email field */}
            <label
              className='block mb-2 text-sm font-semibold text-gray-700'
              htmlFor='email'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder='john@example.com'
              required
              autoFocus
              className='w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg outline-none focus:border-blue-400 focus:ring focus:ring-blue-200 transition'
            />
            {/* Password field */}
            <div className='mt-4 relative'>
              <label
                className='block mb-2 text-sm font-semibold text-gray-700'
                htmlFor='password'
              >
                Password
              </label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='******'
                required
                className='w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg outline-none focus:border-blue-400 focus:ring focus:ring-blue-200 transition pr-10'
              />
            </div>
            {/* Remember me & forgot password */}
            <div className='flex items-center justify-between mt-4'>
              <label className='inline-flex items-center text-sm'>
                <input type='checkbox' className='accent-blue-500' />
                <span className='ml-2'>Remember me</span>
              </label>
              <Link
                to='/forgot-password'
                className='text-blue-500 text-sm hover:underline'
              >
                Forgot password?
              </Link>
            </div>
            {/* Error message */}
            {errorMessage && (
              <div className='mt-2 text-red-500 text-sm'>{errorMessage}</div>
            )}
            {/* Action buttons */}
            <button
              type='submit'
              className='w-full mt-6 btn btn-primary font-semibold py-2 rounded-lg shadow transition-transform hover:scale-105'
            >
              Login
            </button>
            <div className='mt-6 text-center text-gray-500'>
              Don't have an account?
              <Link
                to='/signup'
                className='ml-2 text-blue-500 hover:underline font-semibold'
              >
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
