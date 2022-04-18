import React from "react";
import { Chrono } from "react-chrono";
import items from "./items";
import './award.css'

const Awards = () => {
  return (
      <div id = 'awardId' className = 'chroHold'>

          <div className="pTitl">AWARDS</div>
    <div
    className = 'chrono'
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
      >
      </Chrono>
    </div>
      </div>
  );
};
export default Awards;