import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SubPageTabItem = props => {
  const { text, link, className } = props;
  const TabItemClasses = classnames(className);
  return (
    <li className={TabItemClasses}>
      <a href={link}>{text}</a>
    </li>
  );
};

SubPageTabItem.propTypes = {
  /** The copy that exists inside the a tag */
  text: PropTypes.string.isRequired,
  /** The link or href for the a tag */
  link: PropTypes.string.isRequired
};

export default SubPageTabItem;
