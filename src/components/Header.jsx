import "../styles/Header.css";
import { useState } from "react";

const Header = () => {
  const [mode, setMode] = useState(false);

  const toggleDarkAndLightMode = () => {
    setMode(!mode);
  };

  return (
    <header>
      <h1 className="text-3xl">Student Dashboard</h1>
      <button onClick={toggleDarkAndLightMode}>{mode ? "Dark" : "Light"}</button>
    </header>
  );
};

export default Header;
