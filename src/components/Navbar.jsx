import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import logo from "../utils/logo.png";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown open state
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className='bg-white shadow-lg fixed top-0 left-0 right-0 z-50 select-none'>
      <nav className='container mx-auto flex justify-between items-center h-20 px-4 md:px-8'>
        {/* Left: Logo/Brand */}
        <div
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => user && navigate("/feed")}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") user && navigate("/feed");
          }}
          aria-label='Navigate to feed'
        >
          <img
            src={logo}
            alt='DevTinder Logo'
            className='w-10 h-10 rounded-lg shadow-sm'
            draggable={false}
          />
          <span className='text-2xl font-bold tracking-tight text-blue-700'>
            CodeMate
          </span>
        </div>

        {user && (
          <div className='flex items-center gap-4 relative' ref={dropdownRef}>
            <span className='text-base text-gray-600 hidden sm:block'>
              Hi, <span className='font-medium'>{user.firstName}</span>
            </span>
            {/* Avatar Dropdown */}
            <button
              type='button'
              aria-haspopup='menu'
              aria-expanded={dropdownOpen}
              onClick={toggleDropdown}
              className='focus:outline-none flex items-center gap-1'
              aria-label='User menu toggle'
            >
              <img
                className='w-9 h-9 rounded-full border border-gray-200 shadow-sm object-cover'
                src={
                  user.photoUrl ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt='User avatar'
                draggable={false}
              />
              <svg
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen ? "rotate-180 text-blue-500" : "text-gray-400"
                } ml-1`}
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M5.23 7.21a.75.75 0 011.06.02L10 11.187l3.71-3.956a.75.75 0 111.08 1.04l-4.25 4.528a.75.75 0 01-1.08 0l-4.25-4.528a.75.75 0 01.02-1.06z'></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            <ul
              className={`absolute right-0 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50 transition-opacity duration-200 ${
                dropdownOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } max-h-96 overflow-auto`}
              role='menu'
              aria-label='User menu'
              style={{ top: "80px" }}
            >
              <li>
                <button
                  onClick={() => {
                    navigate("/profile");
                    setDropdownOpen(false);
                  }}
                  className='w-full text-left px-4 py-2 hover:bg-blue-50 rounded transition flex justify-between items-center'
                  role='menuitem'
                >
                  Profile
                  <span className='inline-block bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded ml-2'>
                    New
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/connections");
                    setDropdownOpen(false);
                  }}
                  className='w-full text-left px-4 py-2 hover:bg-blue-50 rounded transition'
                  role='menuitem'
                >
                  Connections
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/requests");
                    setDropdownOpen(false);
                  }}
                  className='w-full text-left px-4 py-2 hover:bg-blue-50 rounded transition'
                  role='menuitem'
                >
                  Requests
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setDropdownOpen(false);
                  }}
                  className='w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 rounded transition'
                  role='menuitem'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
