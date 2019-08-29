We use Bootstrap 4's mobile-first flexbox grid system. See their docs for [usage](https://getbootstrap.com/docs/4.3/layout/grid/).

### Basic Example

```jsx
import GridExample from './GridExample'
;<GridExample />
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