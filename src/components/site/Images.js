import React from "react";
import PropTypes from "prop-types";

const Images = props => {
  const { imageSrc, content } = props;

  return (
    <React.Fragment>
      <img className="dg_image" src={imageSrc} alt="" />
      <img className="dg_image left" src={props.imageSrc} alt="" />
      <p>{content}</p>
      <img className="dg_image right" src={props.imageSrc} alt="" />
      <p>{content}</p>
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
