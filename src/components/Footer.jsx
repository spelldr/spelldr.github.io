import React from "react";
import { ThemeContext } from "../contexts/themeContext";

function Footer() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div style={toggle ? { background: "blue" } : {}}>
      <h1>Footer Component</h1>
    </div>
  );
}

export default Footer;