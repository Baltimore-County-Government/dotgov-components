import React from "react";
import PropTypes from "prop-types";

const EmphasizedImage = props => {
  const cardImageStyles = {
    backgroundImage: props.backgroundImageSrc
  };

  return (
    <div className="dg_card-image" style={cardImageStyles}>
      <div className="dg_card-content">
        <h4>{props.imageHeader}</h4>
        <h1>
          <a href="#">{props.imageLink}</a>
        </h1>
      </div>
    </div>
  );
};

EmphasizedImage.propTypes = {
  /** The image to be displayed */
  backgroundImageSrc: PropTypes.string.isRequired,
  /** Adds a description to the image */
  imageHeader: PropTypes.string.isRequired,
  /** Adds a link to the image */
  imageLink: PropTypes.string.isRequired
};

export default EmphasizedImage;
