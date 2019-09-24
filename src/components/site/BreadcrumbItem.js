import React from "react";
import PropTypes from "prop-types";

const BreadcrumbItem = props => {
  const { breadcrumbText } = props;
  return <li>{breadcrumbText}</li>;
};

BreadcrumbItem.propTypes = {
  /** The copy that exists inside the a tag */
  breadcrumbText: PropTypes.string.isRequired
};

export default BreadcrumbItem;
