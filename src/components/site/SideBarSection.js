import React from "react";
import PropTypes from "prop-types";

const SidebarSection = props => {
  const { sideBarTitle, children } = props;
  return (
    <div className="dg_sidebar sidebar">
      <h2>{sideBarTitle}</h2>
      <div>{children}</div>
    </div>
  );
};

SidebarSection.propTypes = {
  /** The title to display */
  sideBarTitle: PropTypes.string.isRequired
};

export default SidebarSection;
