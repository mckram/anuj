import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faResearchgate} from "@fortawesome/free-brands-svg-icons";
import google from '../../Assets/google.png'
import "./Footer.css";

const Footers = () => {
  return (
    <footer className="footer" id ='footerId'>
      <div className="footer-info">Designed by Mckenna Ramsay </div>
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
              <img alt = 'goog' className = 'fa' src={google} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footers;
