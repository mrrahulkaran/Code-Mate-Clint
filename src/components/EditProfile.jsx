import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setPhotoUrl(user.photoUrl || "");
    setAge(user.age || "");
    setGender(user.gender || "");
    setAbout(user.about || "");
  }, [user]);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setTimeout(() => {
        navigate("/feed");
      }, 3000);
    } catch (err) {
      setError(err.response?.data || "Failed to save profile");
    }
  };

  return (
    <>
      <div className='relative flex flex-col lg:flex-row justify-center items-center min-h-[calc(100vh-80px)] gap-10 px-4 max-w-6xl mx-auto pt-8'>
        {/* Animated Gradient Background */}
        <div className='absolute inset-0 -z-10 bg-gradient-animated rounded-3xl' />

        {/* Form Container with Glassmorphism and Fade-In Left Animation */}
        <div className='card w-full max-w-md shadow-xl rounded-lg p-8 bg-white/70 border border-gray-200 backdrop-blur-md animate-fadeSlideInLeft'>
          <h2 className='text-center text-2xl font-semibold mb-6 text-blue-800'>
            Edit Profile
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveProfile();
            }}
            className='flex flex-col gap-4'
          >
            {[
              {
                label: "First Name",
                value: firstName,
                setter: setFirstName,
                type: "text",
              },
              {
                label: "Last Name",
                value: lastName,
                setter: setLastName,
                type: "text",
              },
              {
                label: "Photo URL",
                value: photoUrl,
                setter: setPhotoUrl,
                type: "url",
              },
              { label: "Age", value: age, setter: setAge, type: "number" },
              {
                label: "Gender",
                value: gender,
                setter: setGender,
                type: "text",
              },
              { label: "About", value: about, setter: setAbout, type: "text" },
            ].map(({ label, value, setter, type }) => (
              <label
                key={label}
                className='flex flex-col text-gray-700 font-medium'
              >
                <span className='mb-1'>{label}:</span>
                <input
                  type={type}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  className='input input-bordered w-full bg-white text-gray-900 border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200'
                  required={label !== "About" && label !== "Photo URL"}
                />
              </label>
            ))}
            {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
            <div className='mt-4 flex justify-center'>
              <button
                type='submit'
                className='btn btn-primary px-6 py-2 rounded-md font-semibold hover:scale-105 transition-transform shadow-md hover:shadow-xl'
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>

        {/* UserCard Preview with Scale-Fade Animation */}
        <div className='flex justify-center items-center w-full max-w-md animate-scaleFadeIn'>
          <UserCard
            user={{ firstName, lastName, photoUrl, age, gender, about }}
          />
        </div>
      </div>

      {showToast && (
        <div className='toast toast-top toast-center z-50'>
          <div className='alert alert-success shadow-lg drop-shadow-glow'>
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}

      <style>{`
        /* Animated Gradient Background */
        .bg-gradient-animated {
          background: linear-gradient(270deg, #a5b4fc, #60a5fa, #3b82f6, #2563eb);
          background-size: 800% 800%;
          animation: gradientShift 20s ease infinite;
          border-radius: 1rem;
          filter: drop-shadow(0 0 25px rgba(59,130,246,0.4));
        }

        @keyframes gradientShift {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }

        /* Fade Slide In Left */
        @keyframes fadeSlideInLeft {
          0% { opacity: 0; transform: translateX(-30px);}
          100% { opacity: 1; transform: translateX(0);}
        }
        .animate-fadeSlideInLeft {
          animation: fadeSlideInLeft 0.8s ease forwards;
        }

        /* Scale Fade In */
        @keyframes scaleFadeIn {
          0% { opacity: 0; transform: scale(0.85);}
          100% { opacity: 1; transform: scale(1);}
        }
        .animate-scaleFadeIn {
          animation: scaleFadeIn 0.8s ease forwards;
        }

        /* Toast Shadow Glow */
        .drop-shadow-glow {
          text-shadow: 0 0 15px #3b82f6;
        }
      `}</style>
    </>
  );
};

export default EditProfile;
