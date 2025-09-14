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
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

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

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 select-none backdrop-blur-md bg-white/70 border-b border-blue-200 transition-shadow duration-300 ${
        navScrolled ? "shadow-lg border-blue-400" : "shadow-sm border-blue-200"
      }`}
    >
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
            draggable={false}
            className='w-10 h-10 rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-3 hover:shadow-lg'
          />
          <span className='text-2xl font-bold tracking-tight text-blue-700 relative cursor-pointer group'>
            CodeMate
            <span className='absolute bottom-[-6px] left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left rounded' />
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
              className='focus:outline-none flex items-center gap-1 user-menu-button'
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
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                  dropdownOpen ? "rotate-180 text-blue-500" : "text-gray-400"
                } ml-1`}
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M5.23 7.21a.75.75 0 011.06.02L10 11.187l3.71-3.956a.75.75 0 111.08 1.04l-4.25 4.528a.75.75 0 01-1.08 0l-4.25-4.528a.75.75 0 01.02-1.06z' />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <ul
              className={`absolute right-0 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50 max-h-96 overflow-auto transition-transform transition-opacity duration-300 ${
                dropdownOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
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
