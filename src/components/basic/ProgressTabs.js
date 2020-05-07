import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ProgressTabsItem from "./ProgressTabsItem";

const ProgressTabs = (props) => {
  const { className, tabItems = [] } = props;
  const cssClasses = classnames("dg_progress-tabs", className);

  return (
    <div>
      <ol className={cssClasses}>
        {tabItems.map((item) => {
          return <ProgressTabsItem key={item.id} item={item} />;
        })}
      </ol>
    </div>
  );
};

ProgressTabs.propTypes = {
  /** Populates the Progress Tabs.*/
  tabItems: PropTypes.array.isRequired,
};

export default ProgressTabs;
