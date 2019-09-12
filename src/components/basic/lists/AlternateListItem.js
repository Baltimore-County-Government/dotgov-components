import React from "react";
import PropTypes from "prop-types";

const AlternateListItem = props => {
  const { link, linkText, title } = props;
  return (
    <li>
      <a title={title} href={link}>
        {linkText}
      </a>
    </li>
  );
};

AlternateListItem.propTypes = {
  /** The link or href for the a tag */
  link: PropTypes.string.isRequired,
  /** The copy that exists inside the a tag */
  linkText: PropTypes.string.isRequired,
  /** The copy that exists inside the a tag */
  title: PropTypes.string.isRequired
};

export default AlternateListItem;
