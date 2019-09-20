import React from "react";
import PropTypes from "prop-types";

const BreadcrumbItem = props => {
  const { link, breadcrumbText, title } = props;
  return (
    <li>
      <a title={title} href={link}>
        {breadcrumbText}
      </a>
    </li>
  );
};

BreadcrumbItem.propTypes = {
  /** The link or href for the a tag */
  link: PropTypes.string,
  /** The copy that exists inside the a tag */
  breadcrumbText: PropTypes.string.isRequired,
  /** The copy that exists inside the a tag */
  title: PropTypes.string
};

export default BreadcrumbItem;
