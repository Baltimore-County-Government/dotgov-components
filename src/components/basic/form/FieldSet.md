## Examples

### Basic

```jsx
import FieldSet from "./FieldSet";
import Legend from "./Legend";
import TextArea from "./TextArea";
import FormField from "./FormField";
import Checkbox from "./Checkbox";
<form>
	<FieldSet>
		<Legend>1 - Contact Information</Legend>
		<Checkbox id="car-color-blue" name="car-color" label="Is your car blue?" />
		<Checkbox id="car-color-blue" name="car-color" label="Is your car blue?" />
	</FieldSet>
</form>;
```

If you aren't using react, you'll need to use the following html:

```html
<div class="dg_form-field">
	<label for="full-name" class="dg_label">
		<span class="dg_label-text">Full Name</span>
	</label>
	<input
		id="full-name"
		class="dg_form-field_input--text"
		label="Name"
		placeholder="Enter your full name"
		type="text"
	/>
</div>
```
