import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Child from "./components/Child";
import { ThemeContext } from "./contexts/themeContext";

import "./App.css";

export default function App() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div className={toggle ? "dark" : "light"}>
      <Header />
      <Child />
      <Footer />
    </div>
  );
}