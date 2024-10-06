import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeContext } from "./contexts/themeContext";

import "./App.scss";
import ResumeData from "./pages/ResumeData";
import LeftBar from "./components/LeftBar";
import { Stack } from "@carbon/react";

export default function App() {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <div className={toggleTheme ? "dark" : "light"}>
      <Header />
      <Stack gap={3}>
        <ThemeSwitcher />
        <LeftBar />
      </Stack>
        {/* <ResumeData /> */}
      <Footer />
    </div>
  );
}