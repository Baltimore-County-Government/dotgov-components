import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import FormField from "./form/FormField";

const DateSelector = (props) => {
  const {
    datePickerIsOpen,
    onChange,
    selected,
    dateId,
    formId = "Daterange",
    name,
    hint,
    error,
    label,
    minDate,
    maxDate,
    ...otherProps
  } = props;

  const [state, setState] = useState({
    datePickerIsOpen,
    datePickerIsClosed,
  });

  const datePickerIsClosed = true;

  const openDatePicker = () => {
    setState({
      datePickerIsOpen: !state.datePickerIsOpen,
    });
  };

  const handlesClose = () => {
    setState({
      datePickerIsClosed: !state.datePickerIsClosed,
    });
  };

  return (
    <div className="dg_date-container">
      <FormField id={formId} hint={hint} label={label} error={error}>
        <DatePicker
          selected={selected}
          onChange={onChange}
          name={name}
          id={dateId}
          minDate={minDate}
          maxDate={maxDate}
          onClickOutside={handlesClose}
          open={state.datePickerIsOpen}
          {...otherProps}
        />
      </FormField>
      <button className="dg_date-btn" type="submit" onClick={openDatePicker}>
        <i className="fa fa-calendar" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default DateSelector;
