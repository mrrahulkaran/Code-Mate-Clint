import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Body() {
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
