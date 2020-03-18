import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import classnames from "classnames";

const CheckedInput = props => {
  const {
    cssNamespace = "dg",
    className,
    id,
    name,
    type,
    value,
    label,
    onChange = () => {},
    checked: defaultCheckedState,
    ...otherProps
  } = props;
  const componentClassName = `${cssNamespace}_${type.toLowerCase()}`;
  const cssClassNames = classnames(componentClassName, className);
  const [state, setState] = useState({
    checked: !!defaultCheckedState,
    name,
    value
  });

  const handleChange = changeEvent => {
    const { checked, name, value } = changeEvent.target;
    setState({ checked, name, value });
    onChange({ checked, name, value });
  };

  return (
    <div className={cssClassNames}>
      <input
        className={`${componentClassName}-input`}
        id={id}
        name={name}
        type={type}
        value={value}
        checked={state.checked}
        onChange={handleChange}
        {...otherProps}
      />
      <label className={`dg_label ${componentClassName}-label`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

CheckedInput.propTypes = {
  /** Prefix for checked component css class  */
  cssNamespace: PropTypes.string,
  /** Either radio or checkbox */
  type: PropTypes.string.isRequired,
  /** A unique identifier used to associate the checkbox with the label */
  id: PropTypes.string.isRequired,
  /** Name of the checkbox, this is important when grouping with other checkboxes */
  name: PropTypes.string.isRequired,
  /** A label to describe the associated checkbox */
  label: PropTypes.string.isRequired,
  /** String value to be associated with the given checkbox */
  value: PropTypes.string,
  /** Handle change event accordingly */
  onChange: PropTypes.func,
  /** Sets input to checked if set to true */
  checked: PropTypes.bool
};

export default CheckedInput;
