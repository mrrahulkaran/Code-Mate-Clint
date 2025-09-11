import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants.js";
import { addUser } from "../utils/userSlice";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handelp = () => {
    navigate("/login");
  };

  const handlesignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);

      dispatch(addUser(res.data));
      console.log(res.data);

      navigate("/profile");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      setErrorMessage(error.response?.data || "Failed to sign up");
    }
  };

  return (
    <>
      <div className='flex min-h-[calc(100vh-80px)] items-center justify-center px-4 pt-8'>
        <div className='w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col mx-auto'>
          <h2 className='text-4xl font-extrabold text-center mb-1 text-blue-700'>
            Sign Up
          </h2>
          <p className='text-center text-base mb-5 font-semibold text-blue-600 drop-shadow-glow animate-pulse'>
            Find your perfect match in code and collaboration
          </p>
          <div className='flex flex-col gap-4'>
            {[
              {
                label: "First Name",
                value: firstName,
                setter: setFirstName,
                type: "text",
                placeholder: "Enter First Name",
              },
              {
                label: "Last Name",
                value: lastName,
                setter: setLastName,
                type: "text",
                placeholder: "Enter Last Name",
              },
              {
                label: "Email ID",
                value: emailId,
                setter: setEmailId,
                type: "email",
                placeholder: "Enter Email ID",
              },
              {
                label: "Password",
                value: password,
                setter: setPassword,
                type: "password",
                placeholder: "Create Password",
              },
            ].map(({ label, value, setter, type, placeholder }) => (
              <label
                key={label}
                className='flex flex-col text-gray-700 font-medium'
              >
                <span className='mb-1'>{label}:</span>
                <input
                  type={type}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  placeholder={placeholder}
                  className='input input-bordered w-full bg-white text-gray-900 border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200'
                  required
                  autoComplete={type === "password" ? "new-password" : "off"}
                />
              </label>
            ))}
          </div>
          {errorMessage && (
            <p className='text-red-500 mt-3 text-center'>{errorMessage}</p>
          )}
          <div className='mt-6 flex flex-col items-center gap-4'>
            <button
              onClick={handlesignUp}
              className='btn btn-primary w-full text-lg font-semibold py-2 rounded-md hover:scale-105 transition-transform'
            >
              Sign Up
            </button>
            <p className='text-gray-600'>
              Already have an account?{" "}
              <span
                onClick={handelp}
                className='cursor-pointer text-blue-600 hover:underline'
                role='button'
                tabIndex={0}
              >
                Login here
              </span>
            </p>
          </div>
        </div>
      </div>
      {showToast && (
        <div className='toast toast-top toast-center z-50'>
          <div className='alert alert-success shadow-lg'>
            <span>Profile created successfully.</span>
          </div>
        </div>
      )}
      <style>
        {`
          .drop-shadow-glow {
            text-shadow: 0 0 8px #3b82f6, 0 0 20px #60a5fa;
          }
        `}
      </style>
    </>
  );
};

export default SignUp;
