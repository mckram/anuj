import "./App.css";
import Navbars from "./Components/navbar/navbar";
import Footers from "./Components/footer/Footer";
import Home from "./Views/home/home";
import Awards from "./Views/awards/awards";
import Publications from "./Views/publics/publics";
import Education from "./Views/educ/educ";
import Work from "./Views/work/work";
import React from "react";
import { useLocation } from 'react-router-dom';
import {  Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <div key ='c' className="App">
        <Navbars key = 'b' />
        <Routes key = {0} >
          <Route location = {location} key={location.pathname} path="/" element={<Home />} />
          <Route location = {location} key={location.pathname}  path="/education" element={<Education/>} />
          <Route location = {location}key={location.pathname}  path="/publications" element={<Publications/>} />
          <Route location = {location} key={location.pathname}  path="/awards" element={<Awards />} />
          <Route location = {location} key={location.pathname}  path="/home" element={<Home />} />
          <Route location = {location} key={location.pathname}  path="/work" element={<Work />} />
        </Routes>
      </div>
      <Footers key = 'd' />
    </AnimatePresence>
  );
}

export default App;
