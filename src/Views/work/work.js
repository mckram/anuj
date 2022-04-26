import React from "react";
import "./work.css";
import lsn from "../../Assets/ls.png";
import genome from "../../Assets/genome.png";
import uvic from "../../Assets/uvic.png";
import { motion } from "framer-motion";

const Education = () => {
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
    <div id="workId" className="workMain">
      <div className="pTitl">Work Experience</div>
      <div className="educCont">
        <img className="edImgL" src={lsn} alt="lsn" />
        <div className="uniInf">
          <p className="edTitl">Sales and Support Specialist</p>
          <p className="edSub">Laboratory Supply Network</p>
          <p>Dec 2021 - Present</p>
          <p>
            Acted as a product specialist responsible for facilitating sales
            through direct communication with clients. Responsiblities included
            providing product information, and organizing and managing the flow
            of goods throughout the supply chain. Created excellent client
            experiences, and generated significant sales through the promotion
            and maintenance of client relations.
          </p>
        </div>
      </div>
      <div className="educCont">
        <img className="edImgG" src={genome} alt="genome" />
        <div className="uniInf">
          <p className="edTitl">Postdoctoral Researcher</p>
          <p className="edSub">UVic Genome BC Proteomics Centre</p>
          <p>Jan 2021 - Dec 2021</p>
          <p>
            Directed and published research on microbial identification using
            MALDI-TOF mass spectrometry, an emerging technology for microbial
            identification and diagnosis.
          </p>
        </div>
      </div>
      <div className="educCont">
        <img className="edImgVi" src={uvic} alt="kmc" />
        <div className="uniInf">
          <p className="edTitl">Teaching Assistant</p>
          <p className="edSub">University of Victoria</p>
          <p>Sep 2016 - Dec 2020</p>
          <p>
            Taught AP CHEM (General), CHEM 101 (General), CHEM 232 (Organic),
            CHEM 222 (Inorganic), CHEM 260 (Organic), CHEM 362 (Inorganic).
            Gained experience with leadership, effective communication, and
            helped to promote an equitable and inclusive learning environment.
          </p>
        </div>
      </div>
      <div className="pTitl">Volunteering Experience</div>
      <div className="educCont">
        <img className="edImgVi" src={uvic} alt="kmc" />
        <div className="uniInf">
          <p className="edTitl">Mass Spectrometry Assistant</p>
          <p className="edSub">University of Victoria</p>
          <p>Oct 2020 - Dec 2021</p>
          <p>
            Gained experience running and analyzing samples on a wide variety of
            mass spec instrumentation including GC-MS, LC-MS and UPLC-DAD-MS,
            while also assisting in facility maintenance and troubleshooting.
          </p>
        </div>
      </div>
      <div className="educCont">
        <img className="edImgVi" src={uvic} alt="kmc" />
        <div className="uniInf">
          <p className="edTitl">Floor Emergency Coodinator</p>
          <p className="edSub">University of Victoria</p>
          <p>Sep 2019 - Dec 2020</p>
          <p>
            Acted as a volunteer to ensure effective evacuations and to promote
            building safety. Responsibilities included directing building
            occupants towards the Emergency Assembly Point, and organizing
            building-wide practice drills.
          </p>
        </div>
      </div>
      <div className="educCont">
        <img className="edImgVi" src={uvic} alt="kmc" />
        <div className="uniInf">
          <p className="edTitl">
            Member - Chemistry Student Advisory Committee
          </p>
          <p className="edSub">University of Victoria</p>
          <p>Oct 2020 - Dec 2021</p>
          <p>
            Acted on a committee whose directive was to provide input and
            feedback regarding the activities and plans of the Department.
            Topics discussed include curriculum, teaching assistantship,
            research experience courses for undergraduate students, research
            reputation for the Department, teaching reputation for the
            Department, and commitment of the Department to equity, diversity
            and inclusion.
          </p>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Education;
