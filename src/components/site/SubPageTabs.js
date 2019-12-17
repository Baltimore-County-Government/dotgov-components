import React from "react";

const SubPageTabs = props => {
  return (
    <div className="dg_breadcrumbs">
      <h2>In this section</h2>
      {props.children}
    </div>
  );
};

export default SubPageTabs;
