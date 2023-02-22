import "../styles/Header.css";
import { useState } from "react";

const Header = ({ handleDarkModeClick, darkMode }) => {
  console.log(`This is from Header: ${darkMode}`);
  return (
    <header className="grid grid-cols-[90%,10%] bg-gradient-to-r from-emerald-200">
      <h1 className="text-8xl font-babylonica text-emerald-800">Student Dashboard</h1>
      <div className="pt-10">
        <a onClick={() => handleDarkModeClick()} href="#_" className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-32 h-10 transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-slate-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-32 h-10 bg-slate-200 border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-slate-200">{darkMode ? "Dark" : "Light"}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
