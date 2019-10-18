import React from "react";
import PropTypes from "prop-types";

const StepListItem = props => {
  const { id, buttonText, children } = props;
  return (
    <li className="dg_step-list__list-section" id={`step-${id}`}>
      <button
        className="dg_button-link dg_step-list__toggle-btn"
        aria-expanded="false"
        aria-controls={`panel-${id}`}
        type="button"
      >
        <span className="dg_step-list__toggle-btn__title">{buttonText}</span>
        <span className="dg_step-list__toggle-btn__btn-text">Show</span>
      </button>
      <div
        id={`panel-${id}`}
        className="dg_step-list__details"
        aria-labelledby={`step-${id}`}
      >
        {children}
      </div>
    </li>
  );
};

StepListItem.propTypes = {
  /** Unique id to identify each step, must be unique on the page */
  id: PropTypes.string.isRequired,
  /** Button Text to be displayed for the step, should identify which step it is. Example Step 1 - Do something really cool. */
  buttonText: PropTypes.string.isRequired
};

export default StepListItem;
