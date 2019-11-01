```jsx
import Checkbox from './form/Checkbox';
<Collapse id="sample-collapse" header="Colors">
  <Checkbox id="color-blue" name="favorite-color" label="Blue" value="blue" />
  <Checkbox id="color-red" name="favorite-color" label="Red" value="red" />
  <Checkbox id="color-green" name="favorite-color" label="Green" value="green" />
</Collapse>
```

Html Snippet:

```html
<div class="dg_accordion__collapsible dg_collapse">
    <button class="dg_accordion-btn" type="button" id="accordion-btn-sample-collapse" aria-expanded="true">
        <span class="dg_accordion_buttontext-holder">Categories</span>
    </button>
    <div class="multi-collapse collapse show" aria-labeledby="accordion-btn-sample-collapse" aria-expanded="true">
        <div class="dg_accordion-item-body">
            <p>Some really compelling content goes here.</p>
        </div>
    </div>
</div>
```