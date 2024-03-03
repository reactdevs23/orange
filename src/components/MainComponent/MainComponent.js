import React from "react";
import classes from "./MainComponent.module.css";
const MainComponent = ({ header, heading, postName, sendCv, link }) => {
  return (
    <div
      className="min-h-screen flex items-start py-16 justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <p className={classes.deadline}>
            {header.deadLine.label} {header.deadLine.date}
          </p>
          <p className={classes.companyName}>{header.companyName}</p>
        </div>
        <div className={classes.headingContainer}>
          <h2 className={classes.heading1}>{heading.heading1}</h2>{" "}
          <h2 className={classes.heading2}>{heading.heading2}</h2>{" "}
          <h2 className={classes.postName}>{postName}</h2>{" "}
        </div>

        <p className={classes.sendCv}>
          {sendCv.label} <a href={sendCv.link}>{sendCv.link}</a>
        </p>
        <p className={classes.link}>{sendCv.link}</p>
      </div>
    </div>
  );
};

export default MainComponent;
