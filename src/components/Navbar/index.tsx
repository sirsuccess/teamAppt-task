import React from "react";
import "./styles.scss";
import Logo from "../../assets/images/logo.png";
import Calendar from "../../assets/images/calendar.png";

export default function Nav() {
  return (
    <header className="navbar">
      <img src={Logo} alt="" />

      <div className="right-nav">
        <img src={Calendar} alt="calendar" />

        <div className="days">
          <p className="text1">Day 1</p>
          <p className="text2">of 5</p>
        </div>
      </div>
    </header>
  );
}
