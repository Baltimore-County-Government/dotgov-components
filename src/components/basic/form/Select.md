```jsx
import Select from './Select'
;
const options =[{id:1,name:'published'},{id:2,name:'updated'},{id:3,name:'views'},{id:4,name:'comments'}];
<Select
  id="select-items"
  label="Select from the list"
  options={options}
/>
```

If you aren't using react, you'll need to use the following html:

```html
<div class="dg_form-field">
  <label for="select-items" class="dg_label">
    <span class="dg_label-text">Select from the list</span>
  </label>
  <select id="select-items" className="dg_form-field-select">
    <option value="1">published</option>
    <option value="2">updated</option>
    <option value="3">views</option>
    <option value="4">comments</option>
  </select>
</div>
```
