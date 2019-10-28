### Default Icon Button

```jsx
<div style={{ padding: "10px" }}>
  <IconButton
    icon="fa fa-users"
    size="large"
    description="Visit our users dashboard to learn more."
    text="Default"
  />
</div>
```

Html Snippet:

```html
<button class="dg_icon-link dg_icon-link--large" type="button" aria-label="Visit our users dashboard to learn more.">
    <i aria-hidden="true" class="dg_icon fa fa-users"></i>
    <span>Default</span>
</button>
```

### Default Icon Button in a Dark Section

```jsx
import Section from "./containers/Section";
<Section className="dark">
  <div style={{ padding: "10px" }}>
    <IconButton
      icon="fa fa-users"
      size="large"
      description="Visit our users dashboard to learn more."
      text="Default"
    />
  </div>
</Section>;
```

Html Snippet:

```html
<button class="dg_icon-link dg_icon-link--large" type="button" aria-label="Visit our users dashboard to learn more.">
    <i aria-hidden="true" class="dg_icon fa fa-users"></i>
    <span>Default</span>
</button>
```


