import React from "react";
import PropTypes from "prop-types";

const SidebarSection = props => {
  const { title, children } = props;
  return (
    <div className="dg_sidebar__section">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

SidebarSection.propTypes = {
  /** The title to display */
  title: PropTypes.string.isRequired
};

export default SidebarSection;
