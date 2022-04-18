import { Navbar, Nav, Container } from "react-bootstrap";
import React , { useState, useEffect } from "react";
import "./navbar.css";
import { Link as Link1 } from "react-scroll";
import logo from "../../Assets/logo.png";

const Navbars = () => {
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#232b79") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("5rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <Navbar
        className="navi"
        variant="dark"
        collapseOnSelect
        fixed="top"
        expand="sm"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand className="brand" href="/">
              <img alt="logo" src={logo} height="90px" width="130px"></img>
            </Navbar.Brand>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <li>
                {" "}
                <Link1
                  activeClass="active"
                  className="links"
                  to="educId"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  EDUCATION
                </Link1>{" "}
              </li>
              <li>
                {" "}
                <Link1
                  className="links"
                  activeClass="active"
                  to="publicId"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  PUBLICATIONS
                </Link1>{" "}
              </li>
              <li>
                {" "}
                <Link1
                  className="links"
                  activeClass="active"
                  to="awardId"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  AWARDS
                </Link1>{" "}
              </li>
              <li>
                {" "}
                <Link1
                  className="links"
                  activeClass="active"
                  to="workId"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  WORK
                </Link1>{" "}
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
