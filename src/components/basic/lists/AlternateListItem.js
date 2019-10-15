import React from "react";
import PropTypes from "prop-types";

const AlternateListItem = props => {
  const { link, linkText } = props;
  return (
    <li>
      <a href={link}>{linkText}</a>
    </li>
  );
};

AlternateListItem.propTypes = {
  /** The link or href for the a tag */
  link: PropTypes.string.isRequired,
  /** The copy that exists inside the a tag */
  linkText: PropTypes.string.isRequired
};

export default AlternateListItem;
