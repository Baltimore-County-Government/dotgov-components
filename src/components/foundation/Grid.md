We use Bootstrap 4's mobile-first flexbox grid system. See their docs for
[usage](https://getbootstrap.com/docs/4.3/layout/grid/).

### Basic Example

```jsx
import GridExample from "./GridExample";
<GridExample />;
```

Html Snippet:

```html
<div class="container">
  <div class="row">
    <div class="col-sm">
      <p class="example">Column 1 of 3 columns</p>
    </div>
    <div class="col-sm">
      <p class="example">Column 2 of 3 columns</p>
    </div>
    <div class="col-sm">
      <p class="example">Column 3 of 3 columns</p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <p class="example">Column 1 of 4 columns</p>
    </div>
    <div class="col-sm">
      <p class="example">Column 2 of 4 columns</p>
    </div>
    <div class="col-sm">
      <p class="example">Column 3 of 4 columns</p>
    </div>
    <div class="col-sm">
      <p class="example">Column 4 of 4 columns</p>
    </div>
  </div>
</div>
```

## CSS Grid (Experimental)

We still are required to support IE11 so we can't skip to using CSS Grid fully.
This experimental grid only supports 3 columns layouts and uses
[modernizr](https://modernizr.com/) to let us know if the browser we are in
supports css grid. It is meant for the use in inside templates. If you find
another use please submit a
[pull request](https://github.com/baltimorecounty/dotgov-components/compare).

```jsx
import IconButton from "../basic/IconButton";
<div className="dg_grid">
  <IconButton
    text="Fish Button"
    icon="fas fa-fish"
    description="Visit our fishes dashboard to learn more"
  />
  <IconButton
    text="Fish Button"
    icon="fas fa-fish"
    description="Visit our fishes dashboard to learn more"
  />
  <IconButton
    text="Fish Button"
    icon="fas fa-fish"
    description="Visit our fishes dashboard to learn more"
  />
  <IconButton
    text="Fish Button"
    icon="fas fa-fish"
    description="Visit our fishes dashboard to learn more"
  />
  <IconButton
    text="Fish Button"
    icon="fas fa-fish"
    description="Visit our fishes dashboard to learn more"
  />
  <IconButton
    text="Really Long, Long, Fish Button"
    icon="fas fa-fish"
    description=""
  />
</div>;
```
