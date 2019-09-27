import React from "react";
import PropTypes from "prop-types";

const BreadcrumbItem = props => {
  const { text } = props;
  return <li>{text}</li>;
};

BreadcrumbItem.propTypes = {
  /** The copy that exists inside the a tag */
  text: PropTypes.string.isRequired
};

export default BreadcrumbItem;
