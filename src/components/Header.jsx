import React from "react";
import { ThemeContext } from "../contexts/themeContext";

function Header() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div style={toggle ? { background: "blue" } : {}}>
      <h1>Header Component</h1>
    </div>
  );
}

export default Header;