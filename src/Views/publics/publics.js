import React from "react";
import publics from "../../Assets/arts.json";
import Bars from "./bar";
import "./publics.css";
import author from "../../Assets/auth.json";
import { motion } from "framer-motion";

const Publications = () => {
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

  const int = author.interests

  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
    <div className = 'pubBig' id="publicId">
      <div className="pubCont">
        <div className="innerpC">
          {publics.map((keyName, i) => (
            <div key = {i} className = 'inns'>
            <li className="pubTitl" >
              {keyName.title}
            </li>
             <li className="pubAuth" >
             Authors: {keyName.authors}
           </li>
  
           <li className="pubDate" >
           {keyName.publication? 'Publication: ' + keyName.publication: ""}
           </li>
           <li className="pubCite" >
             {keyName.cited_by.value?'Cited by: ' + keyName.cited_by.value: ""}
           </li>
            </div>
          ))}
        </div>
      </div>
      <div className = 'mainCont'>
            
            <div className="cCont">
              <p className="cT"> Research Interests </p>
              <p className="cC"> {int.map((k, i)=> (
                <li className="cI" key={i}>
                {k}
              </li>
              ))}</p>
        </div>
        <div className="barDiv">
          <Bars />
          </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Publications;
