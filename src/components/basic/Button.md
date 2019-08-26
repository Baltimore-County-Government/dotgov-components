### Primary

#### Default

```jsx
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
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
<div className="dg_section dark" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
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

#### Primary Button with Icon

```jsx
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<Button text="Icon Button" icon="fas fa-star" />
	<Button text="Icon Button" className="hovered" icon="fas fa-star" />
	<Button text="Icon Button" className="active" icon="fas fa-star" />
	<Button text="Icon Button" className="focused" icon="fas fa-star" />
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<Button text="Icon Button" className="disabled" icon="fas fa-star" />
</div>
```

Html Snippet:

```html
<button type="button" class="dg_button">
	<i aria-hidden="true" class="dg_button_icon fas fa-star"></i>Icon Button</button>
```

### Secondary Button

```jsx
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<Button text="Default" className="dg_button-secondary" />
	<Button text="Hovered" className="hovered dg_button-secondary" />
	<Button text="Active" className="active dg_button-secondary" />
	<Button text="Focused" className="focused dg_button-secondary" />
	<Button text="Disabled" className="disabled dg_button-secondary" />
</div>
```

Html Snippet:

```html
<button type="button" class="dg_button-secondary">Default</button>
```

### Text Button

```jsx
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
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
<div className="dg_section dark" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<Button text="Default" className="dg_button dg_button-link" />
	<Button text="Hovered" className="hovered dg_button dg_button-link" />
	<Button text="Active" className="active dg_button dg_button-link" />
	<Button text="Focused" className="focused dg_button dg_button-link" />
	<Button text="Disabled" className="disabled dg_button dg_button-link" />
</div>
```

Html Snippet:

```html
<button type="button" class="dg_button-link">Default</button>
```

### Decorative Links

#### Large

```jsx
import IconLink from './IconLink'
;<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<IconLink href="#linkbutton-default" id="linkbutton-default" text="Default" icon="fas fa-star" description="View your favorite default items." />
	<IconLink href="#linkbutton-hovered" id="#linkbutton-hovered" className="hovered" text="Hovered" icon="fas fa-star" description="View your favorite default items." />
	<IconLink href="#linkbutton-active" id="#linkbutton-active" className="active" text="Active" icon="fas fa-star" description="View your favorite default items." />
	<IconLink href="#linkbutton-focuses" id="#linkbutton-focuses" className="focused" text="Focused" icon="fas fa-star" description="View your favorite default items." />
	<IconLink href="#linkbutton-disabled" id="#linkbutton-disabled" className="disabled" text="Disabled" icon="fas fa-star" description="View your favorite default items." />
</div>
```

Html Snippet:

```html
<a
	class="dg_icon-link dg_icon-link--large"
	href="#linkbutton-default"
	id="linkbutton-default"
	aria-label="View your favorite default items.">
		<i aria-hidden="true" class="dg_icon fas fa-star fa-2x" style="width: 100px; height: 100px;"></i>
		<span>Default</span>
</a>
```

#### Small

```jsx
import IconLink from './IconLink'
;<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<IconLink size="small" href="#linkbutton-default" id="linkbutton-default" icon="fas fa-star" description="View your favorite default items." />
	<IconLink size="small" href="#linkbutton-hovered" id="#linkbutton-hovered" className="hovered" icon="fas fa-star" description="View your favorite default items." />
	<IconLink size="small" href="#linkbutton-active" id="#linkbutton-active" className="active" icon="fas fa-star" description="View your favorite default items." />
	<IconLink size="small" href="#linkbutton-focuses" id="#linkbutton-focuses" className="focused" icon="fas fa-star" description="View your favorite default items." />
	<IconLink size="small" href="#linkbutton-disabled" id="#linkbutton-disabled" className="disabled" icon="fas fa-star" description="View your favorite default items." />
</div>
```
Html Snippet:

```html
<a
	class="dg_icon-link dg_icon-link--small"
	href="#linkbutton-default"
	aria-label="View your favorite default items.">
		<i aria-hidden="true" class="dg_icon fas fa-star fa-1x" style="width: 50px; height: 50px;"></i>
</a>
```

#### Large in a Dark Section

By including a button inside of a [dark section](dark-section), it will automatically be styled appropriately.

```jsx
import IconLink from './IconLink'
;<div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }} className="dg_section dark">
	<IconLink href="#linkbutton-default" id="linkbutton-default" text="Default" icon="fas fa-star" description="View your favorite default items." />
	<IconLink href="#linkbutton-hovered" id="#linkbutton-hovered" className="hovered" text="Hovered" icon="fas fa-star" description="View your favorite default items." />
	<IconLink href="#linkbutton-active" id="#linkbutton-active" className="active" text="Active" icon="fas fa-star" description="View your favorite default items." />
	<IconLink href="#linkbutton-focuses" id="#linkbutton-focuses" className="focused" text="Focused" icon="fas fa-star" description="View your favorite default items." />
	<IconLink href="#linkbutton-disabled" id="#linkbutton-disabled" className="disabled" text="Disabled" icon="fas fa-star" description="View your favorite default items." />
</div>
```

Html Snippet:

```html
<a
	class="dg_icon-link dg_icon-link--large"
	href="#linkbutton-default"
	id="linkbutton-default"
	aria-label="View your favorite default items.">
		<i aria-hidden="true" class="dg_icon fas fa-star fa-2x" style="width: 100px; height: 100px;"></i>
		<span>Default</span>
</a>
```

#### Small in a Dark Section

By including a button inside of a [dark section](dark-section), it will automatically be styled appropriately.

```jsx
import IconLink from './IconLink'
;<div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }} className="dg_section dark">
	<IconLink size="small" href="#linkbutton-default" id="linkbutton-default" icon="fas fa-star" description="View your favorite default items." />
	<IconLink size="small" href="#linkbutton-hovered" id="#linkbutton-hovered" className="hovered" icon="fas fa-star" description="View your favorite default items." />
	<IconLink size="small" href="#linkbutton-active" id="#linkbutton-active" className="active" icon="fas fa-star" description="View your favorite default items." />
	<IconLink size="small" href="#linkbutton-focuses" id="#linkbutton-focuses" className="focused" icon="fas fa-star" description="View your favorite default items." />
	<IconLink size="small" href="#linkbutton-disabled" id="#linkbutton-disabled" className="disabled" icon="fas fa-star" description="View your favorite default items." />
</div>
```

Html Snippet:

```html
<a
	class="dg_icon-link dg_icon-link--small"
	href="#linkbutton-default"
	aria-label="View your favorite default items.">
		<i aria-hidden="true" class="dg_icon fas fa-star fa-1x" style="width: 50px; height: 50px;"></i>
</a>
```