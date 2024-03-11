import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
import Details from "./Details";
import Data from "./Data";
const Footer = () => {
  const details = (info) => {
    return (
      <Details
        key={info.id}
        heading={info.heading}
        p1={info.p1}
        p2={info.p2}
        p3={info.p3}
        p4={info.p4}
      />
    );
  };
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        {Data.map(details)}
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
