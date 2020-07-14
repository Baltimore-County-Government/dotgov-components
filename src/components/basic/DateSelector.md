### Default Date Selector

```jsx
import FieldSet from "./form/FieldSet";

<FieldSet title="Date Range Filter">
  <DateSelector label="Start Date" dateId="StartDate" formId="formStart" />
  <DateSelector label="End Date" dateId="EndDate" formId="formEnd" />
</FieldSet>;
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
