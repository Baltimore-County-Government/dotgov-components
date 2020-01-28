import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

const ExploreLink = ({ className, children, href, ...rest }) => {
  const cssClasses = classnames("dg_explore-link", className);
  return (
    <a className={cssClasses} href={href} {...rest}>
      {children}
    </a>
  );
};

ExploreLink.propTypes = {
  /** The URL that the hyperlink points to */
  href: PropTypes.string.isRequired,
  /** Anything that you can put in between a normal anchor <a>{children}</a> */
  children: PropTypes.string.isRequired
};

export default ExploreLink;
