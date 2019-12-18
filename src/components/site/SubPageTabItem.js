import React from "react";
import PropTypes from "prop-types";

const SubPageTabItem = props => {
  const { text, link } = props;
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};

SubPageTabItem.propTypes = {
  /** The copy that exists inside the a tag */
  text: PropTypes.string.isRequired,
  /** The link or href for the a tag */
  link: PropTypes.string
};

export default SubPageTabItem;
