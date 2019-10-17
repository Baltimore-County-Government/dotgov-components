import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const StepList = props => {
  const { children, type = "collapsed" } = props;
  const cssClasses = classnames("dg_step-list", type);
  return (
    <div class={cssClasses}>
      <button class="dg_button-link dg_step-list__show-all-btn">
        Show All
      </button>
      <ol class="dg_step-list__list">{children}</ol>
    </div>
  );
};

StepList.propTypes = {
  /** Type of  step list you want to display, possible values are 'static', 'collapsed', 'expanded' */
  type: PropTypes.string
};

export default StepList;
