import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

const ExploreLink = ({ className, text, href, ...rest }) => {
  const cssClasses = classnames("dg_explore-link", className);
  return (
    <a className={cssClasses} href={href} {...rest}>
      {text}
    </a>
  );
};

ExploreLink.propTypes = {
  /** The URL that the hyperlink points to */
  href: PropTypes.string.isRequired,
  /** Link Text */
  text: PropTypes.string.isRequired
};

export default ExploreLink;
