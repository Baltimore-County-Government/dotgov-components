### Primary

#### Default

The button component can be used by adding the desired class to an a tag (the most common use on the site) or a button tag (a more niche case usage of the button).

```jsx
<div
  style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}
>
  <Button text="Default" />
  <Button text="Hovered" className="hovered" />
  <Button text="Active" className="active" />
  <Button text="Focused" className="focused" />
  <Button text="Disabled" className="disabled" />
</div>
```

Html Snippet:

```html
<button type="button" class="dg_button">Default</button>
```

#### Primary Button in a Dark Section

By including a button inside of a [dark section](dark-section), it will automatically be styled appropriately.

```jsx
import Section from "./containers/Section";
<Section className="dark">
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
    }}
  >
    <Button text="Default" />
    <Button text="Hovered" className="hovered" />
    <Button text="Active" className="active" />
    <Button text="Focused" className="focused" />
    <Button text="Disabled" className="disabled" />
  </div>
</Section>;
```

Html Snippet:

```html
<button type="button" class="dg_button">Default</button>
```

#### Primary Button with Icon

```jsx
<div
  style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}
>
  <Button text="Button" icon="fas fa-star" />
  <Button text="Button" className="hovered" icon="fas fa-star" />
  <Button text="Button" className="active" icon="fas fa-star" />
  <Button text="Button" className="focused" icon="fas fa-star" />
  <Button text="Button" className="disabled" icon="fas fa-star" />
</div>
```

Html Snippet:

```html
<button type="button" class="dg_button">
  <i aria-hidden="true" class="dg_button_icon fas fa-star"></i>Icon Button
</button>
```

### Secondary Button

```jsx
<div
  style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}
>
  <Button text="Default" className="dg_button-secondary" />
  <Button text="Hovered" className="hovered dg_button-secondary" />
  <Button text="Active" className="active dg_button-secondary" />
  <Button text="Focused" className="focused dg_button-secondary" />
  <Button text="Disabled" className="disabled dg_button-secondary" />
</div>
```

Html Snippet:

```html
<button type="button" class="dg_button dg_button-secondary">Default</button>
```

### Secondary Button (as Link)

```jsx
<div
  style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}
>
  <Button as="a" href="#" text="Default" className="dg_button-secondary" />
  <Button
    as="a"
    href="#"
    text="Hovered"
    className="hovered dg_button-secondary"
  />
  <Button
    as="a"
    href="#"
    text="Active"
    className="active dg_button-secondary"
  />
  <Button
    as="a"
    href="#"
    text="Focused"
    className="focused dg_button-secondary"
  />
  <Button
    as="a"
    href="#"
    text="Disabled"
    className="disabled dg_button-secondary"
  />
</div>
```

Html Snippet:

```html
<a class="dg_button dg_button-secondary" href="#">Default</a>
```

### Text Button

```jsx
<div
  style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}
>
  <Button text="Default" className="dg_button-link" />
  <Button text="Hovered" className="hovered dg_button-link" />
  <Button text="Active" className="active dg_button-link" />
  <Button text="Focused" className="focused dg_button-link" />
  <Button text="Disabled" className="disabled dg_button-link" />
</div>
```

Html Snippet:

```html
<button type="button" class="dg_button-link">Default</button>
```

### Text Button in a Dark Section

By including a button inside of a [dark section](dark-section), it will automatically be styled appropriately.

```jsx
import Section from "./containers/Section";
<Section className="dark">
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
    }}
  >
    <Button text="Default" className="dg_button-link" />
    <Button text="Hovered" className="hovered dg_button-link" />
    <Button text="Active" className="active dg_button-link" />
    <Button text="Focused" className="focused dg_button-link" />
    <Button text="Disabled" className="disabled dg_button-link" />
  </div>
</Section>;
```

Html Snippet:

```html
<button type="button" class="dg_button-link">Default</button>
```

### Decorative Links

#### Large

```jsx
import IconLink from "./IconLink";
<div
  style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}
>
  <IconLink
    href="#linkbutton-default"
    id="linkbutton-default"
    type="circle"
    text="Default"
    icon="fas fa-star"
    description="View your favorite default items."
  />
  <IconLink
    href="#linkbutton-hovered"
    id="#linkbutton-hovered"
    type="circle"
    className="hovered"
    text="Hovered"
    icon="fas fa-star"
    description="View your favorite default items."
  />
  <IconLink
    href="#linkbutton-active"
    id="#linkbutton-active"
    type="circle"
    className="active"
    text="Active"
    icon="fas fa-star"
    description="View your favorite default items."
  />
  <IconLink
    href="#linkbutton-focuses"
    id="#linkbutton-focuses"
    type="circle"
    className="focused"
    text="Focused"
    icon="fas fa-star"
    description="View your favorite default items."
  />
  <IconLink
    href="#linkbutton-disabled"
    id="#linkbutton-disabled"
    type="circle"
    className="disabled"
    text="Disabled"
    icon="fas fa-star"
    description="View your favorite default items."
  />
</div>;
```

Html Snippet:

```html
<a
  class="dg_icon-link dg_icon-link--large dg_icon-link--circle"
  href="#linkbutton-default"
  id="linkbutton-default"
  aria-label="View your favorite default items."
>
  <i aria-hidden="true" class="dg_icon fas fa-star"></i>
  <span>Default</span>
</a>
```

#### Small

```jsx
import IconLink from "./IconLink";
<div
  style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}
>
  <IconLink
    size="small"
    href="#linkbutton-default"
    id="linkbutton-default"
    type="circle"
    icon="fas fa-star"
    description="View your favorite default items."
  />
  <IconLink
    size="small"
    href="#linkbutton-hovered"
    id="#linkbutton-hovered"
    type="circle"
    className="hovered"
    icon="fas fa-star"
    description="View your favorite default items."
  />
  <IconLink
    size="small"
    href="#linkbutton-active"
    id="#linkbutton-active"
    type="circle"
    className="active"
    icon="fas fa-star"
    description="View your favorite default items."
  />
  <IconLink
    size="small"
    href="#linkbutton-focuses"
    id="#linkbutton-focuses"
    type="circle"
    className="focused"
    icon="fas fa-star"
    description="View your favorite default items."
  />
  <IconLink
    size="small"
    href="#linkbutton-disabled"
    id="#linkbutton-disabled"
    type="circle"
    className="disabled"
    icon="fas fa-star"
    description="View your favorite default items."
  />
</div>;
```

Html Snippet:

```html
<a
  class="dg_icon-link dg_icon-link--small dg_icon-link--circle"
  href="#linkbutton-default"
  aria-label="View your favorite default items."
>
  <i aria-hidden="true" class="dg_icon fas fa-star"></i>
</a>
```

#### Tiny

```jsx
import IconLink from "./IconLink";
<div
  style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}
>
  <IconLink
    size="tiny"
    href="#linkbutton-default"
    id="linkbutton-default"
    type="circle"
    icon="far fa-times"
    description="View your favorite default items."
  />
</div>;
```

Html Snippet:

```html
<a
  class="dg_icon-link dg_icon-link--tiny dg_icon-link--circle"
  href="#linkbutton-default"
  aria-label="View your favorite default items."
>
  <i aria-hidden="true" class="dg_icon fas fa-star"></i>
</a>
```

#### Large in a Dark Section

By including a button inside of a [dark section](dark-section), it will automatically be styled appropriately.

```jsx
import IconLink from "./IconLink";
import Section from "./containers/Section";
<Section className="dark">
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <IconLink
      href="#linkbutton-default"
      id="linkbutton-default"
      type="circle"
      text="Default"
      icon="fas fa-star"
      description="View your favorite default items."
    />
    <IconLink
      href="#linkbutton-hovered"
      id="#linkbutton-hovered"
      type="circle"
      className="hovered"
      text="Hovered"
      icon="fas fa-star"
      description="View your favorite default items."
    />
    <IconLink
      href="#linkbutton-active"
      id="#linkbutton-active"
      type="circle"
      className="active"
      text="Active"
      icon="fas fa-star"
      description="View your favorite default items."
    />
    <IconLink
      href="#linkbutton-focuses"
      id="#linkbutton-focuses"
      type="circle"
      className="focused"
      text="Focused"
      icon="fas fa-star"
      description="View your favorite default items."
    />
    <IconLink
      href="#linkbutton-disabled"
      id="#linkbutton-disabled"
      type="circle"
      className="disabled"
      text="Disabled"
      icon="fas fa-star"
      description="View your favorite default items."
    />
  </div>
</Section>;
```

Html Snippet:

```html
<a
  class="dg_icon-link dg_icon-link--large dg_icon--circle"
  href="#linkbutton-default"
  id="linkbutton-default"
  aria-label="View your favorite default items."
>
  <i aria-hidden="true" class="dg_icon fas fa-star"></i>
  <span>Default</span>
</a>
```

#### Small in a Dark Section

By including a button inside of a [dark section](dark-section), it will automatically be styled appropriately.

```jsx
import IconLink from "./IconLink";
import Section from "./containers/Section";
<Section className="dark">
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <IconLink
      size="small"
      href="#linkbutton-default"
      id="linkbutton-default"
      type="circle"
      icon="fas fa-star"
      description="View your favorite default items."
    />
    <IconLink
      size="small"
      href="#linkbutton-hovered"
      id="#linkbutton-hovered"
      type="circle"
      className="hovered"
      icon="fas fa-star"
      description="View your favorite default items."
    />
    <IconLink
      size="small"
      href="#linkbutton-active"
      id="#linkbutton-active"
      type="circle"
      className="active"
      icon="fas fa-star"
      description="View your favorite default items."
    />
    <IconLink
      size="small"
      href="#linkbutton-focuses"
      id="#linkbutton-focuses"
      type="circle"
      className="focused"
      icon="fas fa-star"
      description="View your favorite default items."
    />
    <IconLink
      size="small"
      href="#linkbutton-disabled"
      id="#linkbutton-disabled"
      type="circle"
      className="disabled"
      icon="fas fa-star"
      description="View your favorite default items."
    />
  </div>
</Section>;
```

Html Snippet:

```html
<a
  class="dg_icon-link dg_icon-link--small dg_icon--circle"
  href="#linkbutton-default"
  aria-label="View your favorite default items."
>
  <i aria-hidden="true" class="dg_icon fas fa-star"></i>
</a>
```
