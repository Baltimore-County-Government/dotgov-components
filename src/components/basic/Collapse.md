### Default (Expanded)

```jsx
import Checkbox from "./form/Checkbox";

<Collapse id="sample-collapse" header="Default Example">
  <Checkbox
    id="Checkbox1"
    name="Checkbox1"
    label="Show all popular services"
    value="true"
  />
  <Checkbox
    id="Checkbox2"
    name="Checkbox2"
    label="Show popular services for Rec and Park"
    value="true"
  />
  <Checkbox
    id="Checkbox3"
    name="Checkbox3"
    label="Show popular services for Corrections"
    value="true"
  />
</Collapse>;
```

Html Snippet:

```html
<div class="dg_accordion__collapsible dg_collapse">
  <button
    class="dg_accordion-btn"
    type="button"
    id="accordion-btn-sample-collapse"
    aria-expanded="true"
  >
    <span class="dg_accordion_buttontext-holder">Default Example</span>
  </button>
  <div
    class="multi-collapse collapse show"
    aria-labelledby="accordion-btn-sample-collapse"
    aria-expanded="true"
  >
    <div class="dg_accordion-item-body">
      <p>Some really compelling content goes here.</p>
    </div>
  </div>
</div>
```

### Collapsed by Default

```jsx
<Collapse id="sample-collapse" header="Categories" isExpanded={false}>
  <p>Some really compelling content goes here.</p>
</Collapse>
```

```html
<div class="dg_accordion__collapsible collapsed dg_collapse">
  <button
    class="dg_accordion-btn"
    type="button"
    id="accordion-btn-sample-collapse"
    aria-expanded="false"
  >
    <span class="dg_accordion_buttontext-holder">Categories</span>
  </button>
  <div
    class="multi-collapse collapse"
    aria-labelledby="accordion-btn-sample-collapse"
    aria-expanded="false"
  >
    <div class="dg_accordion-item-body">
      <p>Some really compelling content goes here.</p>
    </div>
  </div>
</div>
```
