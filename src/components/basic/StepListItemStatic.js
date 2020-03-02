import React from "react";
import PropTypes from "prop-types";

const StepListItemStatic = props => {
  const { staticStepTitle, children } = props;
  return (
    <li className="dg_step-list__list-section">
      <span className="dg_button-link dg_step-list__toggle-btn">
        <span className="dg_step-list__toggle-btn__title">
          {staticStepTitle}
        </span>
      </span>
      <div className="dg_step-list__details">{children}</div>
    </li>
  );
};

StepListItemStatic.propTypes = {
  /** Sets the headline title for each item of the list */
  staticStepTitle: PropTypes.string.isRequired
};

export default StepListItemStatic;
