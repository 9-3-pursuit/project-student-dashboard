import "../styles/Header.css";

const Header = ({ handleDarkModeClick, darkMode }) => {
  console.log(`This is from Header: ${darkMode}`);
  return (
    <header className="grid grid-cols-[90%,10%] ">
      <div className="flex justify-center items-center relative group">
        <div className="absolute text-8xl font-kanit inset-4 opacity-60 rounded-lg blur-sm bg-slate-200 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <h1 className="relative text-8xl font-kanit font-bold text-emerald-500 group-hover:text-emerald-400 transition duration-400">Student Dashboard</h1>
      </div>

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
// bg-gradient-to-r from-emerald-200
