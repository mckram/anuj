import React from "react";
import "./educ.css";
import madra from "../../Assets/madr.png";
import uvic from "../../Assets/uvic.png";
import kmc from "../../Assets/kmc.png";

const Education = () => {
  return (
    <div id="educId" className="educMain">
      <div className="pTitl">EDUCATION</div>
      <div className="educCont">
        <img className="edImg" src={uvic} alt="uvic" />
        <div className="uniInf">
          <p className = 'edTitl'>University of Victoria</p>
          <p className = 'edSub'>Doctor of Philosophy</p>
          <p>2016-2020</p>
          <p>
            PhD thesis titled "Anaerobic Electrospray Ionization Mass
            Spectrometry of Methylalumoxane and Zirconium Complexes" under the
            supervision of Prof. Scott McIndoe
          </p>
        </div>
      </div>
      <div className="educCont">
        <img className="edImg" src={madra} alt="madra" />
        <div className="uniInf">
          <p className = 'edTitl'>Indian Institute of Technology, Madras</p>
          <p className="edSub">Master's Degree of Chemistry</p>
          <p>2014-2016</p>
          <p>
            MSc thesis titled "Palladium(II) Based Self-Assembled Coordination
            Complexes" under the supervision of Prof. Dillip Kumar Chand{" "}
          </p>
        </div>
      </div>
      <div className="educCont">
        <img className="edImg" src={kmc} alt="kmc" />
        <div className="uniInf">
          <p className = 'edTitl'> Kirori Mal College</p>
          <p className = 'edSub'>Bachelor's Degree (Honours) in Chemistry</p>
          <p>2010-2013</p>
          <p>
            President of National Service Scheme, student leader, and volunteer with World Wildlife Fund India{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
