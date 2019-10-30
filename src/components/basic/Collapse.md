```jsx
const Content = props => <p>Test Content</p>;
<Collapse
    id="sample-collapse"
    header="Categories"
    content={<Content />}
/>
```

Html Snippet:

```html
<div class="dg_accordion__collapsible dg_collapse">
    <button class="dg_accordion-btn" type="button" aria-controls="collapse-sample-collapse">
        <span class="dg_accordion_buttontext-holder">Categories</span>
        <div class="dg_accordion__subheader"></div>
    </button>
    <div class="multi-collapse collapse show" aria-expanded="true">
        <div class="dg_accordion-item-body">
            <p>Test Content</p>
        </div>
    </div>
</div>
```