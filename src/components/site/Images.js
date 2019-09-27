import React from "react";
import PropTypes from "prop-types";

const Images = props => {
  return (
    <div className="dg_card-image">
      <img alt={props.imageHeader} src={props.imageSrc}></img>
      <div className="dg_card-content">
        <p>{props.imageHeader}</p>
        <p>
          <a href={props.imageLink}>{props.imageSubHeader}</a>
        </p>
      </div>
    </div>
  );
};
export default Images;