import React from "react";
import publics from "../../Assets/arts.json";
import Bars from "./bar";
import "./publics.css";
import author from "../../Assets/auth.json";

const Publications = () => {

  const int = author.interests

  return (
    <div className = 'pubBig' id="publicId">
      <div className="pTitl">PUBLICATIONS</div>
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
            
            <div className="tCont">
              <p className="titlCit"> Research Interests </p>
              <p className="titlCit"> {int.map((k, i)=> (
                <li className="pubInt" key={i}>
                {k}
              </li>
              ))}</p>
        </div>
        <div className="barDiv">
          <Bars />
          </div>
      </div>
    </div>
  );
};

export default Publications;
