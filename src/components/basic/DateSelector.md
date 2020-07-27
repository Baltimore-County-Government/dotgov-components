### Default Date Selector

```jsx
import Collapse from "./Collapse";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";

let [selectedStartValue, setStart] = useState();
let [selectedEndValue, setEnd] = useState();

const handlesStartChange = (date) => {
  setStart(date);
};

const handlesEndChange = (date) => {
  setEnd(date);
};

<Collapse id="sample-collapse" header="Default Example">
  <DateSelector
    name="start"
    label="Start Date"
    dateId="StartDate"
    formId="formStart"
    maxDate={new Date()}
    selected={selectedStartValue}
    onChange={handlesStartChange}
  />
  <DateSelector
    name="end"
    label="End Date"
    dateId="EndDate"
    formId="formEnd"
    maxDate={new Date()}
    selected={selectedEndValue}
    onChange={handlesEndChange}
  />
</Collapse>;
```

```html
<fieldset class="dg_fieldset" aria-describedby="DateRangeFilter">
  <legend class="dg_legend">Date Range Filter</legend>
  <div class="dg_date-container">
    <div class="dg_form-field">
      <label class="dg_label"
        ><span class="dg_label-text">Start Date</span></label
      >
      <div class="react-datepicker-wrapper">
        <div class="react-datepicker__input-container">
          <input type="text" class="" value="06/30/2020" />
        </div>
      </div>
    </div>
    <button class="dg_date-btn" type="submit">
      <i class="fa fa-calendar" aria-hidden="true"></i>
    </button>
  </div>
  <div class="dg_date-container">
    <div class="dg_form-field">
      <label class="dg_label"
        ><span class="dg_label-text">End Date</span></label
      >
      <div class="react-datepicker-wrapper">
        <div class="react-datepicker__input-container">
          <input type="text" class="" value="07/17/2020" />
        </div>
      </div>
    </div>
    <button class="dg_date-btn" type="submit">
      <i class="fa fa-calendar" aria-hidden="true"></i>
    </button>
  </div>
</fieldset>
```
