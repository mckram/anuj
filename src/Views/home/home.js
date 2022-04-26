import React from "react";
import "./home.css";
import anuj from "../../Assets/anuj.png";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons";
import google from "../../Assets/scholar.png";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 8,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  }
  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
    <div className="hmPage">
      <div className="hmText">
        <p className="hmTitle">DR. ANUJ JOSHI</p>
        <p className="hmPar">
          A chemist, researcher and sales professional. Passionate about using
          interdisciplinary methodologies to solve complex problems
        </p>
        <ul className="i">
          <li className="is">
            <a
              href="https://www.linkedin.com/in/dranujjoshi/"
              className="social"
            >
              <FontAwesomeIcon className="fas" icon={faLinkedin} />
            </a>
          </li>
          <li className="is">
            <a href="https://twitter.com/anujjoshi92" className="social">
              <FontAwesomeIcon className="fas" icon={faTwitter} />
            </a>
          </li>
          <li className="is">
            <a
              href="https://www.researchgate.net/profile/Anuj-Joshi-2"
              className="social"
            >
              <FontAwesomeIcon className="fas" icon={faResearchgate} />
            </a>
          </li>
          <li className="is">
            <a
              href="https://scholar.google.ca/citations?user=q5iteV4AAAAJ&hl=en"
              className="social"
            >
              <img alt="goog" className="fas" src={google} />
            </a>
          </li>
        </ul>
        <ul className="i">
          {" "}
          <Button
            variant="primary"
            onClick={() => (window.location = "mailto:anuj.semite@gmail.com")}
            className="button"
          >
            
            Contact
          </Button>{" "}
        </ul>
      </div>

      <div className="hmPic">
        <img className="aj" alt="aj" src={anuj} />
      </div>
    </div>
    </motion.div>
  );
};

export default Home;
