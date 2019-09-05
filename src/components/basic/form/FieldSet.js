import React from "react";
import PropTypes from "prop-types";

const FieldSet = props => {
  const { hint, describedBy, children, title } = props;
  const ariaDescribedBy = describedBy || title.replace(/\s/g, "");

  return (
    <fieldset className="dg_fieldset" aria-describedby={ariaDescribedBy}>
      <legend className="dg_legend">{title}</legend>
      {hint && (
        <span id={ariaDescribedBy} className="dg_fieldset-hint">
          {hint}
        </span>
      )}
      {children}
    </fieldset>
  );
};

FieldSet.propTypes = {
  /** Title to describe the purpose of the group */
  title: PropTypes.string.isRequired,
  /** Only when absolutely necessary, adds text to help the user fill out a field, ex Password Requirements */
  hint: PropTypes.string,
  /** aria-describedby attribute to associated fieldset to the hint */
  describedBy: PropTypes.string
};

export default FieldSet;
