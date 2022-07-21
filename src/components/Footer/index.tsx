import React from "react";
import gold from "../../assets/images/gold-coins.png";
import coinleft from "../../assets/images/coinleft.png";
import coinright from "../../assets/images/coinright.png";
import star3 from "../../assets/images/big-star.png";
import stars from "../../assets/images/star-shine.png";
import star1 from "../../assets/images/star1.png";
import star2 from "../../assets/images/star2.png";
import "./styles.scss";

function Footer() {
  return (
    <div>
      <div className="footer">
        <img className="left-coin" src={coinleft} alt="" />
        <img className="goldPot" src={gold} alt="" />
        <img className="right-coin" src={coinright} alt="" />
        <img className="first-star" src={star1} alt="star" />
        <img className="second-star" src={star2} alt="star" />
        <img className="third-star" src={star3} alt="star" />
        <img className="shooting-first" src={star3} alt="" />
        <img className="shooting-second" src={stars} alt="" />
        <img className="shooting-third" src={stars} alt="" />
        <img className="shooting-fouth" src={star3} alt="" />
      </div>
    </div>
  );
}

export default Footer;
