// src/components/Header.tsx
import React, { useState } from "react";

const Header: React.FC = () => {
  const [openTop, setOpenTop] = useState(false);

  const handleClick = () => {
    setOpenTop(!openTop);
  };
  return (
    <header className="w-full h-16  flex items-center justify-between px-4 shadow-md  ">
      <p className="text-xl text-black">Welcome Back,Admin</p>
      <div className="bg-slate-200 flex items-center  w-[50%] rounded-md p-2">
        <input
          type="text"
          className="w-full outline-none bg-transparent ml-2 text-slate-900"
          placeholder="Search."
        />
        {/* <CiSearch size={25} className="text-slate-500" /> */}
      </div>

      <div className="w-[20%] relative flex items-center justify-around text-black">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-slate-700 rounded-full gap-4"></div>
          <p className="ml-2 font-serif">John Scot</p>
          {/* <MdOutlineArrowDropDown size={25} onClick={handleClick} /> */}
        </div>
        <div className="relative">
          <div className="text-black" onClick={handleClick}>
            User Profile
          </div>
        </div>
        {openTop && (
          <div className="absolute rounded-md shadow bg-white p-2 right-0 top-8 py-4 w-[100px]">
            <h1 className="py-3">Signup</h1>
            <hr />
            <h2>Login</h2>
          </div>
        )}
      </div>
      {/* <div className="text-white">User Profile</div> */}
    </header>
  );
};

export default Header;
