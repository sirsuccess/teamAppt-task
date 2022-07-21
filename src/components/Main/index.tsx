import React from "react";
import Bulb from "../../assets/images/bulb.png";
import { fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import "./styles.scss";
import forward from "../../assets/images/forward.png";

function Main() {
  return (
    <main className="allContent">
      <FadeIn2 className="topContent">
        Unlock to <span> Power your dreams!</span>
      </FadeIn2>
      <FadeIn2 className="midContent">
        Stand a chance to win
        <span>
          <strong> N3,000,000 </strong> everyday for the next 5 days
        </span>
      </FadeIn2>
      <FadeIn className="bottomContent">
        <h3>🚀 How To Play</h3>
        <div className="topHowto">
          <ol>
            <li>Guess the right combination of numbers</li>
            <li>
              Win <strong>N3,000,000</strong> instantly
            </li>
          </ol>
          <p className="midText">
            Sounds unbelievable? Well, guess right & see for yourself!
          </p>
        </div>
        <div className="bottomInnerContent">
          <p>
            <img src={Bulb} alt="" />
          </p>
          <p className="smallText">
            Think well before you guess. You have only <strong>2 </strong>
            attempts per day and even after you wi, you can come back the next
            day to try for another jackpot!
          </p>
        </div>
      </FadeIn>
      <FadeDiv>
        <button className="button">
          <p>Play The Game</p>
          <img src={forward} alt="" />
        </button>
      </FadeDiv>
    </main>
  );
}

export default Main;

const FadeAnimation = keyframes`${fadeInUp}`;

const FadeIn = styled.div`
  animation: 0.5s ${FadeAnimation};
`;

const FadeIn2 = styled.div`
  animation: 2s ${FadeAnimation};
`;
const FadeDiv = styled.div`
  animation: 2s ${FadeAnimation};
`;
