import React from "react";

const Details = ({ heading, p1, p2, p3, p4 }) => {
  return (
    <div className="gpt3__footer-links_div">
      <h4>{heading}</h4>
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
    </div>
  );
};

export default Details;
