```jsx
import Select from './Select'
;
const options =[{id:1,name:'Blue'},{id:2,name:'Red'},{id:3,name:'Yellow'},{id:4,name:'Gray'}];
<Select
  id="select-items"
  label="Select a Favorite Color"
  options={options}
/>
```

If you aren't using react, you'll need to use the following html:

```html
<div class="dg_form-field">
  <label for="select-items" class="dg_label">
    <span class="dg_label-text">Favorite Colors</span>
  </label>
  <select id="select-items" className="dg_form-field-select">
      <option value=""> - Select a Favorite Color - </option>
    <option value="1">Blue</option>
    <option value="2">Red</option>
    <option value="3">Yellow</option>
    <option value="4">Gray</option>
  </select>
</div>
```
