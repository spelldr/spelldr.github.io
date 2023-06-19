import React from "react";
import { ThemeContext } from "../contexts/themeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function ThemeSwitcher() {
  const { toggleTheme, ToggleThemeFunction } = React.useContext(ThemeContext);
  return (
    <div>
      {toggleTheme ? (
        <FontAwesomeIcon icon={faMoon} size="2xl"/>)
      :(<FontAwesomeIcon icon={faSun} size="2xl"/>)
      }
      <br /><button onClick={ToggleThemeFunction}>Change</button>
    </div>
  );
}