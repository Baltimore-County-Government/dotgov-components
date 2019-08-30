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
	</FieldSet>
</form>;
```

If you aren't using react, you'll need to use the following html:

```html
<div class="dg_form-field">
	<fieldset className="dg_fieldset">
		<legend class="dg_legend">1 - Contact Information</legend>
	</fieldset>
</div>
```
