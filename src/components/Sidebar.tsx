// src/components/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/hux.jpg";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64  h-screen bg-gray-950 text-white fixed">
      <div className="mt-10 w-full">
        <h1 className="text-2xl p-2 font-serif tracking-wide text-green-300 font-bold">
          Get Property
        </h1>
        <hr />
      </div>
      <nav className="mt-20">
        <ul>
          <li className="p-4">
            <div className="h-14 w-14 rounded-full">
              <img
                src={pic}
                alt=""
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </li>
          <li className="p-4 hover:bg-blue-700 font-bold text-xl">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-blue-700 font-bold text-xl">
            <Link to="/users">Users</Link>
          </li>
          <li className="p-4 hover:bg-blue-700 font-bold text-xl">
            <Link to="/agent">Agent</Link>
          </li>
          <li className="p-4 hover:bg-blue-700 font-bold text-xl">
            <Link to="/property">Property</Link>
          </li>
          <li className="p-4 hover:bg-blue-700 font-bold text-xl">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="absolute rounded-t-md bottom-0 mb-4 bg-blue-700 w-full h-20 p-2">
        <h1>Help & Support</h1>
        <button className="text-red-800 font-bold text-xl cursor-auto">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
