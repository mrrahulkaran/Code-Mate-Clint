import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import logo from "../utils/logo.png";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className='navbar bg-velentine shadow-lg'>
      <div className='flex-1 px-2 mx-2'>
        <a className='btn btn-ghost text-xl'>
          <img
            src={logo}
            alt='DevTinder Logo'
            className='inline-block w-14 h-14 mr-2'
          />{" "}
          CodeMate
        </a>
      </div>
      {user && (
        <div className='flex-none gap-2'>
          <div className='form-control'> Hi, {user.firstName}</div>
          <div className='dropdown dropdown-end mx-5'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='flex'>
                <div className='w-8 rounded-full'>
                  <img
                    alt='user-profile-picture'
                    src={
                      user.photoUrl ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            >
              <li>
                <a
                  className='justify-between'
                  onClick={() => navigate("/profile")}
                >
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
