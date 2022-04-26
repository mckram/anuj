import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RightNav from './rightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'white' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = () => {
const [burg, setBurg] = useState("#1d2679");
  const [open, setOpen] = useState(false)
  


  const listenScrollEvent = () => {
    window.scrollY > 10 ? setBurg("white") : setBurg("#1d2679");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <StyledBurger  open={open} onClick={() => setOpen(!open)}>
        <div style={{ backgroundColor: burg}}/>
        <div style={{ backgroundColor: burg}}/>
        <div style={{ backgroundColor: burg}}/>
      </StyledBurger>
      <RightNav open = {open}/>
    </>
  )
}

export default Burger