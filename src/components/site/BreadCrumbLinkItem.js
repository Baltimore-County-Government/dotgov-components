import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

const BreadCrumbLinkItem = props => {
  const { link, text, className } = props;
  const BreadcrumbClasses = classnames("breadcrumb", className);
  return (
    <a className={BreadcrumbClasses} href={link}>
      {text}
    </a>
  );
};

BreadCrumbLinkItem.propTypes = {
  /** The link or href for the a tag */
  link: PropTypes.string,
  /** The copy that exists inside the a tag */
  text: PropTypes.string.isRequired
};

export default BreadCrumbLinkItem;
