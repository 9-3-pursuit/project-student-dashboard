import "../styles/Header.css";
import { useState } from "react";

const Header = () => {
  const [mode, setMode] = useState(false);

  const toggleDarkAndLightMode = () => {
    setMode(!mode);
  };

  return (
    <header>
      <h1>Student Dashboard</h1>
      <button onClick={toggleDarkAndLightMode}>{mode ? "Dark" : "Light"}</button>
    </header>
  );
};

export default Header;
