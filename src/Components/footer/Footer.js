import React , { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faResearchgate} from "@fortawesome/free-brands-svg-icons";
import goog from '../../Assets/scholar.png'
import logos from '../../Assets/logos.png'

import "./Footer.css";

const Footers = () => {
  const [navSize, setnavSize] = useState("3rem");
  const [display, setDisplay] = useState("none");


  const listenScrollEvent = () => {

    window.scrollY > 100 ? setnavSize("4rem") : setnavSize("3rem");
    window.scrollY > 100? setDisplay("inline") : setDisplay("none");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <footer className="footer" id ='footerId'  style={{
      backgroundColor: 'transparent',
      height: navSize,
      display: display,
      transition: "all 1s"
    }}>
      <div className="footer-info">
      <img className = 'mck' src = {logos} height = '35x' width = 'auto ' alt = 'mck'/> 
        Designed by Mckenna Ramsay 
        </div>
      <div className="social-container">
        <ul className="icons">
          <li className = 'ico'>
            <a
              href="https://www.linkedin.com/in/dranujjoshi/"
              className="social"
            >
              <FontAwesomeIcon className = 'fa' icon={faLinkedin} />
            </a>
          </li>
          <li className = 'ico'>
            <a href="https://twitter.com/anujjoshi92" className="social">
              <FontAwesomeIcon className = 'fa'icon={faTwitter} />
            </a>
          </li>
          <li className = 'ico'>
            <a href="https://www.researchgate.net/profile/Anuj-Joshi-2" className="social">
              <FontAwesomeIcon className = 'fa'icon={faResearchgate} />
            </a>
          </li>
          <li className = 'ico'>
            <a href="https://scholar.google.ca/citations?user=q5iteV4AAAAJ&hl=en" className="social">
              <img height = '20px' width = 'auto'alt = 'goog' className = 'fa' src={goog} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footers;
