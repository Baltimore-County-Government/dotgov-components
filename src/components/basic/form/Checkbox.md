### Single Checkbox

```jsx
<Checkbox id="car-color-blue" name="car-color" label="Is your car blue?" />
```

Html Snippet:

```html
<div class="dg_checkbox">
	<input class="dg_checkbox-input" id="car-color-blue" name="car-color" type="checkbox" value="">
	<label class="dg_label dg_checkbox-label" for="car-color-blue">Is your car blue?</label>
</div>
```

### Checkbox Group

```jsx
import CheckboxGroup from './CheckboxGroup'
;
<CheckboxGroup hint="Select all that apply." describedBy="favorite-colors-hint" heading="What are your favorite colors?">
	<Checkbox id="color-blue" name="favorite-color" label="Blue" />
	<Checkbox id="color-red" name="favorite-color" label="Red" />
	<Checkbox id="color-yellow" name="favorite-color" label="Yellow" />
	<Checkbox id="color-black" name="favorite-color" label="Black" disabled checked />
</CheckboxGroup>
```

Html Snippet:

```html
<fieldset class="dg_fieldset" aria-describedby="favorite-colors-hint">
	<legend class="dg_fieldset-legend">
	<h1 class="dg_fieldset-heading">What are your favorite colors?</h1></legend>
	<span id="favorite-colors-hint" class="dg_fieldset-hint">Select all that apply.</span>
	<div class="dg_checkbox">
		<input class="dg_checkbox-input" id="color-blue" name="favorite-color" type="checkbox" value="">
		<label class="dg_label dg_checkbox-label" for="color-blue">Blue</label>
	</div>
	<div class="dg_checkbox">
		<input class="dg_checkbox-input" id="color-red" name="favorite-color" type="checkbox" value="">
		<label class="dg_label dg_checkbox-label" for="color-red">Red</label>
	</div><div class="dg_checkbox">
		<input class="dg_checkbox-input" id="color-yellow" name="favorite-color" type="checkbox" value="">
		<label class="dg_label dg_checkbox-label" for="color-yellow">Yellow</label>
	</div><div class="dg_checkbox">
		<input class="dg_checkbox-input" id="color-black" name="favorite-color" type="checkbox" disabled="" value="" checked="">
		<label class="dg_label dg_checkbox-label" for="color-black">Black</label>
	</div>
</fieldset>
```