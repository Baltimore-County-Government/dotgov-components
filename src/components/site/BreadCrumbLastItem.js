import React from "react";
import PropTypes from "prop-types";

const BreadcrumbLastItem = props => {
  const { link, text } = props;
  return (
    <a className="breadcrumb breadcrumb-last" href={link}>
      {text}
    </a>
  );
};

BreadcrumbLastItem.propTypes = {
  /** The link or href for the a tag */
  link: PropTypes.string,
  /** The copy that exists inside the a tag */
  text: PropTypes.string.isRequired
};

export default BreadcrumbLastItem;
