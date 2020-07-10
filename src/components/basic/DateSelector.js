import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import FieldSet from "./form/FieldSet";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = (props) => {
  const { date = new Date(), onChange = () => {}, ...otherProps } = props;

  const [state, setState] = useState({
    date,
  });

  const handleChange = (date) => {
    setState({ date });
    onChange({ date });
  };

  return (
    <div className="dg_date-container">
      <FieldSet title="Start Date">
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
