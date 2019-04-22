import React from "react";
import PropTypes from "prop-types";

const FormField = props => {
  const { id, label, hint, error } = props;
  return (
    <div className="dg_form-field">
      <label htmlFor={id} className="dg_label">
        <span className="dg_label-text">{label}</span>
        {hint && <span className="dg_label-hint">{hint}</span>}
        {error && (
          <span className="dg_label-validation">
            {/* <Icon icon="exclamation-triangle" /> {error} */}
          </span>
        )}
      </label>
      {props.children}
    </div>
  );
};

FormField.propTypes = {
  /** A unique identifier used to associate the input with the label */
  id: PropTypes.string.isRequired,
  /** Only when absolutely necessary, adds text to help the user fill out a field, ex Password Requirements */
  hint: PropTypes.string,
  /** A label to describe the associated text input */
  label: PropTypes.string.isRequired
};

export default FormField;
