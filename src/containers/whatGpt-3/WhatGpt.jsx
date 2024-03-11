import React from "react";
import "./whatGpt.css";
import { Feature } from "../../component";
import data from "./data";
const WhatGpt = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={data[0].title} text={data[0].text} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title={data[1].title} text={data[1].text} />
        <Feature title={data[2].title} text={data[2].text} />
        <Feature title={data[3].title} text={data[3].text} />
        {/* {data.map(details)} */}
      </div>
    </div>
  );
};

export default WhatGpt;
