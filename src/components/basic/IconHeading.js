import React from "react";
import PropTypes from "prop-types";

const Heading = props => {
  const { level, text } = props;
  switch (level) {
    case "1":
      return <h1 className="dg_icon-heading">{text}</h1>;
    case "3":
      return <h3 className="dg_icon-heading">{text}</h3>;
    default:
      return <h2 className="dg_icon-heading">{text}</h2>;
  }
};

const IconHeading = props => {
  const { icon, image } = props;

  return (
    <div className="dg_icon-heading__container">
      <span className="dg_icon-heading__icon">
        {image ? (
          <img src={image} alt="" />
        ) : (
          <i className={`${icon}`} aria-hidden="true"></i>
        )}
      </span>
      <Heading {...props} />
    </div>
  );
};

IconHeading.propTypes = {
  /** Font Awesome icon class */
  icon: PropTypes.string,
  /** If an icon is not specified an image src can be used */
  image: PropTypes.string,
  /** Level of heading you wish to display, "1" for h1, "2" for h2 ... */
  level: PropTypes.string,
  /** Heading text */
  text: PropTypes.string.isRequired
};

export default IconHeading;
