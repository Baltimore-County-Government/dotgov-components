import React from "react";

const EmphasizedImage = props => (
  <div className="dg_card-image">
    <div className="dg_card-content">
      <h4>{props.linkheader}</h4>
      <h1>
        <a href="#">{props.linktext}</a>
      </h1>
    </div>
  </div>
);
export default EmphasizedImage;
