import React from "react";
import PropTypes from "prop-types";

const EmphasizedImage = props => (
  <div className="dg_card-image" style={props.backgroundimage}>
    <div className="dg_card-content">
      <h4>{props.imageheader}</h4>
      <h1>
        <a href="#">{props.imagelink}</a>
      </h1>
    </div>
  </div>
);

EmphasizedImage.propTypes = {
  /** The image to be displayed */
  backgroundimage: PropTypes.string.isRequired,
  /** Adds a description to the image */
  imageheader: PropTypes.string.isRequired,
  /** Adds a link to the image */
  imagelink: PropTypes.string.isRequired
};

export default EmphasizedImage;
