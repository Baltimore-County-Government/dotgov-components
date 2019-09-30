import React from "react";
import PropTypes from "prop-types";

const Images = props => {
  const { imageSrc, content } = props;

  return (
    <React.Fragment>
      <div className="dg_image-content">
      <img  src={imageSrc} alt="description of the image" />
      <img className="dg_image left" src={props.imageSrc} alt="description of the image" />
      <p>{content}</p>
      <img className="dg_image right" src={props.imageSrc} alt="description of the image" />
      <p>{content}</p>
      </div>
    </React.Fragment>
  );
};

Images.propTypes = {
  /** imageSrc: Image that needs to be diplayed */
  imageSrc: PropTypes.string.isRequired,
  /** content: text that needs to be displayed */
  content: PropTypes.string.isRequired
};

export default Images;
