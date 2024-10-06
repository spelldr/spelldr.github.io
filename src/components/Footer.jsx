import React from "react";
import { ThemeContext } from "../contexts/themeContext";

function Footer() {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <div style={toggleTheme ? { background: "blue" } : {}}>
      <h1>Footer Component</h1>
    </div>
  );
}

export default Footer;