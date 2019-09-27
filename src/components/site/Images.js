import React from "react";
import PropTypes from "prop-types";

const Images = props => {
  const { imageSrc, content } = props;

  return (
    <React.Fragment>
      <div className="dg_image">
        <img src={imageSrc} aria-hidden="true" />
      </div>
      <div className="dg_image left">
        <img src={props.imageSrc} aria-hidden="true" />
      </div>
      <p>{content}</p>
      <div className="dg_image right">
        <img src={props.imageSrc} aria-hidden="true" />
      </div>
      <p>{content}</p>
    </React.Fragment>
  );
};

Images.propTypes = {
  /** imageSrc: Image that needs to be diplayed */
  imageSrc: PropTypes.string.isRequired,
  /** content: text that needs to be displayed */
  content: PropTypes.string.isRequired,

};

export default Images;
