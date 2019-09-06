### Radio Buttons

```jsx
import CheckedInputGroup from "./CheckedInputGroup";
<CheckedInputGroup
  title="Is your refrigerator running?"
  hint="Select the most appropriate answer"
>
  <RadioButton
    id="refrigerator-running-yes"
    name="refrigerator-running"
    label="Yes"
    value="yes"
  />
  <RadioButton
    id="refrigerator-running-no"
    name="refrigerator-running"
    label="No"
    value="no"
  />
  <RadioButton
    id="refrigerator-running-maybe"
    name="refrigerator-running"
    label="Maybe"
    value="maybe"
    disabled
  />
</CheckedInputGroup>;
```

Html Snippet:

```html
<fieldset class="dg_fieldset">
  <legend class="dg_legend">
    Is your refrigerator running?
  </legend>
  <span class="dg_fieldset-hint">Select the most appropriate answer</span>
  <div class="dg_radio">
    <input
      class="dg_radio-input"
      id="refrigerator-running-yes"
      name="refrigerator-running"
      type="radio"
      value="yes"
    /><label class="dg_label dg_radio-label" for="refrigerator-running-yes"
      >Yes</label
    >
  </div>
  <div class="dg_radio">
    <input
      class="dg_radio-input"
      id="refrigerator-running-no"
      name="refrigerator-running"
      type="radio"
      value="no"
    /><label class="dg_label dg_radio-label" for="refrigerator-running-no"
      >No</label
    >
  </div>
  <div class="dg_radio">
    <input
      class="dg_radio-input"
      id="refrigerator-running-maybe"
      name="refrigerator-running"
      type="radio"
      disabled=""
      value="maybe"
    />
    <label class="dg_label dg_radio-label" for="refrigerator-running-maybe"
      >Maybe</label
    >
  </div>
</fieldset>
```
