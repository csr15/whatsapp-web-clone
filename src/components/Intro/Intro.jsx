import React from "react";
import IntroImg from "../../assets/images/intro-connection.jpg";
import FooterIcon from "../../assets/images/intro-text-computer.svg";

function Intro() {
  return (
    <div class="intro-container">
      <img src={IntroImg} alt="Whatsapp-Clone" />
      <h1>keep your phone connected</h1>
      <p>
        WhatsApp connects to your phone to sync messages. To reduce data usage,
        connect your phone to Wi-Fi.
      </p>
      <p>
        Developed by <a href="https://ragulcs.netlify.app" target="__blank">Ragul CS</a>
      </p>
      <div className="spacer"></div>
    </div>
  );
}

export default Intro;
