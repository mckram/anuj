import Burger from "./burger";

import { Navbar} from "react-bootstrap";
import React, { useState, useEffect } from "react";

import logo from "../../Assets/logo.png";
import logo2 from "../../Assets/logo2.png";

import "./navbar.css";

const Navbars = () => {
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("#fbfbfd");
    const [navLog, setnavLog] = useState(logo2);
  
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#232b79") : setnavColor("#fbfbfd");
        window.scrollY > 10 ? setnavSize("6rem") : setnavSize("5rem");
        window.scrollY > 10 ? setnavLog(logo) : setnavLog(logo2);
      };
      useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
          window.removeEventListener("scroll", listenScrollEvent);
        };
      }, []);
    
  return (
    <Navbar
    className="navbar"
    variant="dark"
    collapseOnSelect
    fixed="top"
    expand="sm"
    style={{
      backgroundColor: navColor,
      height: navSize,
      transition: "all 1s",
    }}
  >
      <Navbar.Brand className="brand" href="/">
        <img alt="logo" src={navLog} height="90px" width="auto"></img>
      </Navbar.Brand>  
    <Burger/>
  </Navbar>
  );
};

export default Navbars;
