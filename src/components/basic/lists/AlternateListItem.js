import React from "react";
import PropTypes from "prop-types";

const AlternateListItem = props => {
  const { link, title } = props;
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
};

AlternateListItem.propTypes = {
  /** The link or href for the a tag */
  link: PropTypes.string.isRequired,
  /** The link or href for the a tag */
  title: PropTypes.string.isRequired
};

export default AlternateListItem;
