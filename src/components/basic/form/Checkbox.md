### Single Checkbox

```jsx
<Checkbox
	id="car-color-blue"
	name="car-color"
	label="Is your car blue?"
	value="blue"
/>
```

Html Snippet:

```html
<div class="dg_checkbox">
	<input
		class="dg_checkbox-input"
		id="car-color-blue"
		name="car-color"
		type="checkbox"
		value="blue"
	/>
	<label class="dg_label dg_checkbox-label" for="car-color-blue"
		>Is your car blue?</label
	>
</div>
```

### Checkbox Group

```jsx
import CheckedInputGroup from "./CheckedInputGroup";
<CheckedInputGroup
	hint="Select all that apply."
	describedBy="favorite-colors-hint"
	title="What are your favorite colors?"
>
	<Checkbox id="color-blue" name="favorite-color" label="Blue" value="blue" />
	<Checkbox id="color-red" name="favorite-color" label="Red" value="red" />
	<Checkbox
		id="color-yellow"
		name="favorite-color"
		label="Yellow"
		value="yellow"
	/>
	<Checkbox
		id="color-black"
		name="favorite-color"
		label="Black"
		value="black"
		disabled
		checked
	/>
</CheckedInputGroup>;
```

Html Snippet:

```html
<fieldset class="dg_fieldset" aria-describedby="favorite-colors-hint">
	<legend class="dg_legend">
		What are your favorite colors?
	</legend>
	<span id="favorite-colors-hint" class="dg_fieldset-hint"
		>Select all that apply.</span
	>
	<div class="dg_checkbox">
		<input
			class="dg_checkbox-input"
			id="color-blue"
			name="favorite-color"
			type="checkbox"
			value="blue"
		/>
		<label class="dg_label dg_checkbox-label" for="color-blue">Blue</label>
	</div>
	<div class="dg_checkbox">
		<input
			class="dg_checkbox-input"
			id="color-red"
			name="favorite-color"
			type="checkbox"
			value="red"
		/>
		<label class="dg_label dg_checkbox-label" for="color-red">Red</label>
	</div>
	<div class="dg_checkbox">
		<input
			class="dg_checkbox-input"
			id="color-yellow"
			name="favorite-color"
			type="checkbox"
			value="yellow"
		/>
		<label class="dg_label dg_checkbox-label" for="color-yellow">Yellow</label>
	</div>
	<div class="dg_checkbox">
		<input
			class="dg_checkbox-input"
			id="color-black"
			name="favorite-color"
			type="checkbox"
			disabled=""
			value="black"
			checked=""
		/>
		<label class="dg_label dg_checkbox-label" for="color-black">Black</label>
	</div>
</fieldset>
```
