import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

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
    } catch (err) {
      setError(err.response?.data || "Failed to save profile");
    }
  };

  return (
    <>
      <>
        <div className='flex flex-col lg:flex-row justify-center items-center min-h-[calc(100vh-80px)] gap-10 px-4 max-w-6xl mx-auto pt-8'>
          <div className='card w-full max-w-md shadow-xl rounded-lg p-8 bg-white border border-gray-100'>
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
                {
                  label: "About",
                  value: about,
                  setter: setAbout,
                  type: "text",
                },
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
                  className='btn btn-primary px-6 py-2 rounded-md font-semibold hover:scale-105 transition-transform'
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>

          <div className='flex justify-center items-center w-full max-w-md'>
            <UserCard
              user={{ firstName, lastName, photoUrl, age, gender, about }}
            />
          </div>
        </div>

        {showToast && (
          <div className='toast toast-top toast-center z-50'>
            <div className='alert alert-success shadow-lg'>
              <span>Profile saved successfully.</span>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default EditProfile;
