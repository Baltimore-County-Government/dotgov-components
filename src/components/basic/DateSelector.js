import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import FieldSet from "./form/FieldSet";

const DateSelector = (props) => {
  const {
    date = new Date(),
    onChange = () => {},
    title,
    ...otherProps
  } = props;

  const [state, setState] = useState({
    date,
  });

  const handleChange = (date) => {
    setState({ date });
    onChange({ date });
  };

  return (
    <div className="dg_date-container">
      <FieldSet title={title}>
        <DatePicker
          selected={state.date}
          onChange={handleChange}
          {...otherProps}
        />
        <button className="dg_date-btn" type="submit">
          <i class="fa fa-calendar" aria-hidden="true"></i>
        </button>
      </FieldSet>
    </div>
  );
};

export default DateSelector;
