import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ProgressTabs = (props) => {
  const { className, tabItems = [] } = props;
  const cssClasses = classnames("dg_progress-tabs", className);

  return (
    <div>
      <ol className={cssClasses}>
        {tabItems.map((item) => {
          const { id, isHighlighted, name } = item;
          return (
            <li key={id} className={isHighlighted ? "highlight" : ""}>
              {name}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

ProgressTabs.propTypes = {
  /** Populates the selectable items in the ProgressTabs.*/
  tabItems: PropTypes.array.isRequired,
};

export default ProgressTabs;
