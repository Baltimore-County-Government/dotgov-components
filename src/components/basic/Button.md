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

Html Snippet for Link:

```html
<a href="#" class="dg_button">Default</a>
```

Html Snippet for Button:
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

Html Snippet for Link:

```html
<a class="dg_button" href="#">Default</a>
```

Html Snippet for Button:
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

Html Snippet for Link:

```html
<a class="dg_button" href="#">
  <i aria-hidden="true" class="dg_button_icon fas fa-star"></i>Icon Button
</a>
```

Html Snippet for Button:

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

Html Snippet for Link:

```html
<a class="dg_button dg_button-secondary" href="#">Default</a>
```

Html Snippet for Button:

```html
<button type="button" class="dg_button dg_button-secondary">Default</button>
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

### Default Icon Button

```jsx
import IconLink from "./IconLink";

<div style={{ padding: "10px" }}>
  <IconLink
    icon="fa fa-users"
    size="large"
    description="Visit our users dashboard to learn more."
    text="Default"
    href="https://www.w3schools.com"
  />
  <IconLink
    className="hovered"
    icon="fa fa-users"
    size="large"
    description="Visit our users dashboard to learn more."
    text="Hovered"
    href="https://www.w3schools.com"
  />
  <IconLink
    className="active"
    icon="fa fa-users"
    size="large"
    description="Visit our users dashboard to learn more."
    text="Active"
    href="https://www.w3schools.com"
  />
  <IconLink
    className="focused"
    icon="fa fa-users"
    size="large"
    description="Visit our users dashboard to learn more."
    text="Focused"
    href="https://www.w3schools.com"
  />
  <IconLink
    className="disabled"
    icon="fa fa-users"
    size="large"
    description="Visit our users dashboard to learn more."
    text="Disabled"
    href="https://www.w3schools.com"
  />
</div>
```

Html Snippet for Links:

```html
<a
  href="https://www.w3schools.com"
  class="dg_icon-link dg_icon-link--large"
  aria-label="Visit our users dashboard to learn more."
>
  <i aria-hidden="true" class="dg_icon fa fa-users"></i>
  <span>Default</span>
</a>
```

Html Snippet for Buttons:

```html
<button class="dg_icon-link dg_icon-link--large" type="button" aria-label="Visit our users dashboard to learn more.">
    <i aria-hidden="true" class="dg_icon fa fa-users"></i>
    <span>Default</span>
</button>
```

### Default Link Button in a Dark Section

```jsx
import Section from "./containers/Section";
import IconLink from "./IconLink";
<Section className="dark">
  <div style={{ padding: "10px" }}>
    <IconLink
      icon="fa fa-users"
      size="large"
      description="Visit our users dashboard to learn more."
      text="Default"
      href="https://www.w3schools.com"
    />
    <IconLink
      className="hovered"
      icon="fa fa-users"
      size="large"
      description="Visit our users dashboard to learn more."
      text="Hovered"
      href="https://www.w3schools.com"
    />
    <IconLink
      className="active"
      icon="fa fa-users"
      size="large"
      description="Visit our users dashboard to learn more."
      text="Active"
      href="https://www.w3schools.com"
    />
    <IconLink
      className="focused"
      icon="fa fa-users"
      size="large"
      description="Visit our users dashboard to learn more."
      text="Focused"
      href="https://www.w3schools.com"
    />
    <IconLink
      className="disabled"
      icon="fa fa-users"
      size="large"
      description="Visit our users dashboard to learn more."
      text="Disabled"
      href="https://www.w3schools.com"
    />
  </div>
</Section>;
```

Html Snippet for Links:

```html
<a
  href="https://www.w3schools.com"
  class="dg_icon-link dg_icon-link--large"
  aria-label="Visit our users dashboard to learn more."
>
  <i aria-hidden="true" class="dg_icon fa fa-users"></i>
  <span>Default</span>
</a>
```

Html Snippet for Buttons:

```html
<button class="dg_icon-link dg_icon-link--large" type="button" aria-label="Visit our users dashboard to learn more.">
    <i aria-hidden="true" class="dg_icon fa fa-users"></i>
    <span>Default</span>
</button>
```

### Grid

```jsx
import Section from "./containers/Section";
import IconLink from "./IconLink";
<div className="dg_main-content">
  <Section className="dark">
    <div style={{ padding: "10px" }}>
      <div className="dg_item-grid">
        <IconLink
          icon="fa fa-users"
          size="large"
          description="Visit our users dashboard to learn more."
          text="Default"
          href="https://www.w3schools.com"
        />
        <IconLink
          className="hovered"
          icon="fa fa-users"
          size="large"
          description="Visit our users dashboard to learn more."
          text="Hovered"
          href="https://www.w3schools.com"
        />
        <IconLink
          className="active"
          icon="fa fa-users"
          size="large"
          description="Visit our users dashboard to learn more."
          text="Active"
          href="https://www.w3schools.com"
        />
        <IconLink
          className="focused"
          icon="fa fa-users"
          size="large"
          description="Visit our users dashboard to learn more."
          text="Focused"
          href="https://www.w3schools.com"
        />
        <IconLink
          className="disabled"
          icon="fa fa-users"
          size="large"
          description="Visit our users dashboard to learn more."
          text="Disabled"
          href="https://www.w3schools.com"
        />
        <IconLink
          className="disabled"
          icon="fa fa-users"
          size="large"
          description="Visit our users dashboard to learn more."
          text="Disabled"
          href="https://www.w3schools.com"
        />
      </div>
    </div>
  </Section>
</div>;
```

Html Snippet:

```html
<div class="dg_main-content">
  <div class="dg_section dark" style="padding: 10px;">
    <div class="dg_item-grid">
      <a
        href="https://www.w3schools.com"
        class="dg_icon-link dg_icon-link--large"
        aria-label="Visit our users dashboard to learn more."
      >
        <i aria-hidden="true" class="dg_icon fa fa-users"></i>
        <span>Default</span>
      </a>
      <a
        href="https://www.w3schools.com"
        class="dg_icon-link dg_icon-link--large hovered"
        aria-label="Visit our users dashboard to learn more."
      >
        <i aria-hidden="true" class="dg_icon fa fa-users"></i>
        <span>Hovered</span>
      </a>
      <a
        href="https://www.w3schools.com"
        class="dg_icon-link dg_icon-link--large active"
        aria-label="Visit our users dashboard to learn more."
      >
        <i aria-hidden="true" class="dg_icon fa fa-users"></i>
        <span>Active</span>
      </a>
      <a
        href="https://www.w3schools.com"
        class="dg_icon-link dg_icon-link--large focused"
        aria-label="Visit our users dashboard to learn more."
      >
        <i aria-hidden="true" class="dg_icon fa fa-users"></i>
        <span>Focused</span>
      </a>
      <a
        href="https://www.w3schools.com"
        class="dg_icon-link dg_icon-link--large disabled"
        aria-label="Visit our users dashboard to learn more."
      >
        <i aria-hidden="true" class="dg_icon fa fa-users"></i>
        <span>Disabled</span>
      </a>
      <a
        href="https://www.w3schools.com"
        class="dg_icon-link dg_icon-link--large disabled"
        aria-label="Visit our users dashboard to learn more."
      >
        <i aria-hidden="true" class="dg_icon fa fa-users"></i>
        <span>Disabled</span>
      </a>
    </div>
  </div>
</div>
```
