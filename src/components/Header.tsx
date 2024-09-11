// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full h-16 bg-blue-600 flex items-center justify-between px-4 shadow-md">
      <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>
      <div className="text-white">User Profile</div>
    </header>
  );
};

export default Header;
