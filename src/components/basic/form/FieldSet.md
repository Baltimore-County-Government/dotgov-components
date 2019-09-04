## Examples

### Basic

```jsx
import FieldSet from "./FieldSet";
import Legend from "./Legend";
import TextInput from "./TextInput";
<form>
	<FieldSet heading="Heading of Fieldset">
		<Legend>1 - Contact Information</Legend>
		<TextInput
			id="first-name"
			label="First Name"
			placeholder="Enter your first name"
		/>
		<TextInput
			id="last-name"
			label="Last Name"
			placeholder="Enter your last name"
		/>
	</FieldSet>
</form>;
```

If you aren't using react, you'll need to use the following html:

```html
<div class="dg_form-field">
	<fieldset className="dg_fieldset">
		<legend class="dg_legend">1 - Contact Information</legend>
		<div class="dg_form-field">
			<label for="first-name" class="dg_label">
				<span class="dg_label-text">First Name</span>
			</label>
			<input
				id="first-name"
				class="dg_form-field_input--text"
				label="First Name"
				placeholder="Enter your first name"
				type="text"
			/>
		</div>
		<div class="dg_form-field">
			<label for="last-name" class="dg_label">
				<span class="dg_label-text">Last Name</span>
			</label>
			<input
				id="last-name"
				class="dg_form-field_input--text"
				label="Last Name"
				placeholder="Enter your last name"
				type="text"
			/>
		</div>
	</fieldset>
</div>
```
