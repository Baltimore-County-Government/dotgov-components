import React from "react";
import PropTypes from "prop-types";

const EmphasizedImage = props => {
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

EmphasizedImage.propTypes = {
  /** The image to be displayed */
  imageSrc: PropTypes.string.isRequired,
  /** Adds a heading to the image */
  imageHeader: PropTypes.string.isRequired,
  /** Adds a sub heading to the image */
  imageSubHeader: PropTypes.string.isRequired,
  /** Adds a link to the image */
  imageLink: PropTypes.string.isRequired
};

export default EmphasizedImage;
