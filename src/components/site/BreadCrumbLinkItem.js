import React from "react";
import PropTypes from "prop-types";

const BreadcrumbLinkItem = props => {
  const { link, text, title } = props;
  return (
    <li>
      <a title={title} href={link}>
        {text}
      </a>
    </li>
  );
};

BreadcrumbLinkItem.propTypes = {
  /** The link or href for the a tag */
  link: PropTypes.string,
  /** The copy that exists inside the a tag */
  text: PropTypes.string.isRequired,
  /** The copy that exists inside the a tag */
  title: PropTypes.string
};

export default BreadcrumbLinkItem;
