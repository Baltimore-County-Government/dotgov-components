### Radio Buttons

```jsx
import CheckedInputGroup from './CheckedInputGroup'
;
<CheckedInputGroup heading="Is your refrigerator running?" hint="Select the most appropriate answer">
	<RadioButton id="refrigerator-running-yes" name="refrigerator-running" label="Yes" />
	<RadioButton id="refrigerator-running-no" name="refrigerator-running" label="No" />
	<RadioButton id="refrigerator-running-maybe" name="refrigerator-running" label="Maybe" disabled />
</CheckedInputGroup>
```

Html Snippet:

```html
<fieldset class="dg_fieldset">
	<legend class="dg_fieldset-legend">
	<h1 class="dg_fieldset-heading">Is your refrigerator running?</h1></legend>
	<span class="dg_fieldset-hint">Select the most appropriate answer</span>
	<div class="dg_radio">
		<input class="dg_radio-input" id="refrigerator-running-yes" name="refrigerator-running" type="radio">
		<label class="dg_label dg_radio-label" for="refrigerator-running-yes">Yes</label>
	</div>
	<div class="dg_radio">
		<input class="dg_radio-input" id="refrigerator-running-no" name="refrigerator-running" type="radio">
		<label class="dg_label dg_radio-label" for="refrigerator-running-no">No</label>
	</div>
	<div class="dg_radio">
		<input class="dg_radio-input" id="refrigerator-running-maybe" name="refrigerator-running" type="radio" disabled>
		<label class="dg_label dg_radio-label" for="refrigerator-running-maybe">Maybe</label>
	</div>
</fieldset>
```