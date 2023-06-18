import React from "react";
import { ThemeContext } from "../contexts/themeContext";

export default function Child() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  return (
    <div>
      Hello {toggle ? "Dark" : "Light"}
      <br /><button onClick={toggleFunction}>Change</button>
    </div>
  );
}