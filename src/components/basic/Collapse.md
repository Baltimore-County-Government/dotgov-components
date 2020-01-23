### Default (Expanded)

```jsx
<Collapse id="sample-collapse" header="Default Example">
  <p>Some really compelling content goes here.</p>
</Collapse>
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
