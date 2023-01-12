// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alertbox from "./components/alertbox";
import {  HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/about.jsx";
function App() {
  const usualTheme = {
    backgroundColor: "white",
    color: "black",
  };
  const myTheme = {
    backgroundColor: "yellow",
    color: "black",
  };
  const navTheme = {
    backgroundColor: "black",
    color: "white",
  };
  //  const [text, changeText] = useState("Default Text");
  const [navBarStyle, changeNavBarStyle] = useState(usualTheme);
  const [theme, setTheme] = useState(usualTheme);
  const onThemeChange = () => {
    if (theme.backgroundColor === "white") {
      setTheme(myTheme);
      changeNavBarStyle(navTheme);
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "blue";
    } else {
      setTheme(usualTheme);
      changeNavBarStyle(usualTheme);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainContainer" id="mainCont">
              <Alertbox />
              <NavBar onClick={onThemeChange} navBarStyle={navBarStyle} />
              <TextForm />
            </div>
          }
        />
        <Route path="/about" element={<About/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
