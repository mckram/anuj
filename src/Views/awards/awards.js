import React from "react";
import { Chrono } from "react-chrono";
import items from "./items";
import "./award.css";
import { motion } from "framer-motion";

const Awards = () => {
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
    <div id="awardId" className="chroHold">
      <div
        className="chrono"
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          margin: "auto",
        }}
      >
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          slideShow
          slideItemDuration={4000}
          scrollable={{ scrollbar: false }}
          theme={{
            primary: "#232b79",
            secondary: "white",
            cardBgColor: "white",
            cardForeColor: "black",
            titleColor: "black",
          }}
        ></Chrono>
      </div>
    </div>
    </motion.div>
  );
};
export default Awards;
