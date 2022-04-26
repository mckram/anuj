import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import './navbar.css'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  color: black;
  padding: 30px;
  margin-left:35%;

  li {
    color: black;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    background-color: rgb(35, 43, 121);
    color:white;
    text-align: center;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: auto;
    width: 300px;
    padding-top: 4.5rem;
    margin: auto;
    padding-right: 30px;
    border-radius: 6px;
  }
`;

const RightNav = ({ open }) => {
  const [navFont, setnavFont] = useState("#1d2679");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavFont("white") : setnavFont("#1d2679");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Ul open={open}>
      <NavLink
        className={({ isActive }) => (isActive ? "Links" : "LinksA")}
        style={{ color: navFont, fontFamily: " Inter, sans-serif" }}
        to="/education"
      >
        Education
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "Links" : "LinksA")}
        style={{ color: navFont, fontFamily: " Inter, sans-serif" }}
        to="/publications"
      >
        Publications
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "Links" : "LinksA")}
        style={{ color: navFont, fontFamily: " Inter, sans-serif" }}
        to="/awards"
      >
        Awards
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "Links" : "LinksA")}
        style={{ color: navFont, fontFamily: " Inter, sans-serif" }}
        to="/work"
      >
        Work & Volunteering
      </NavLink>
    </Ul>
  );
};

export default RightNav;
