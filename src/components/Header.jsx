import React from "react";
import { ThemeContext } from "../contexts/themeContext";

function Header() {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <div style={toggleTheme ? { background: "blue" } : {}}>
      <h1>Header Component</h1>
    </div>
  );
}

export default Header;