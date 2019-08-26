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

#### Primary Button in a Dark Section

```jsx
<div className="dg_section dark" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<Button text="Default" />
	<Button text="Hovered" className="hovered" />
	<Button text="Active" className="active" />
	<Button text="Focused" className="focused" />
	<Button text="Disabled" className="disabled" />
</div>
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

### Secondary Button

```jsx
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<Button text="Default" className="dg_button dg_button-secondary" />
	<Button text="Hovered" className="hovered dg_button dg_button-secondary" />
	<Button text="Active" className="active dg_button dg_button-secondary" />
	<Button text="Focused" className="focused dg_button dg_button-secondary" />
	<Button text="Disabled" className="disabled dg_button dg_button-secondary" />
</div>
```

### Text Button

```jsx
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<Button text="Default" className="dg_button dg_button-link" />
	<Button text="Hovered" className="hovered dg_button dg_button-link" />
	<Button text="Active" className="active dg_button dg_button-link" />
	<Button text="Focused" className="focused dg_button dg_button-link" />
	<Button text="Disabled" className="disabled dg_button dg_button-link" />
</div>
```

### Text Button in a Dark Section

```jsx
<div className="dg_section dark" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<Button text="Default" className="dg_button dg_button-link" />
	<Button text="Hovered" className="hovered dg_button dg_button-link" />
	<Button text="Active" className="active dg_button dg_button-link" />
	<Button text="Focused" className="focused dg_button dg_button-link" />
	<Button text="Disabled" className="disabled dg_button dg_button-link" />
</div>
```

### Decorative Links

```jsx
import LinkButton from './LinkButton'
;<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<LinkButton href="#linkbutton-default" id="linkbutton-default" text="Default" icon="fas fa-star" />
	<LinkButton href="#linkbutton-hovered" id="#linkbutton-hovered" className="hovered" text="Hovered" icon="fas fa-star" />
	<LinkButton href="#linkbutton-active" id="#linkbutton-active" className="active" text="Active" icon="fas fa-star" />
	<LinkButton href="#linkbutton-focuses" id="#linkbutton-focuses" className="focused" text="Focused" icon="fas fa-star" />
	<LinkButton href="#linkbutton-disabled" id="#linkbutton-disabled" className="disabled" text="Disabled" icon="fas fa-star" />
</div>
```

```jsx
import LinkButton from './LinkButton'
;<div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
	<LinkButton size="small" href="#linkbutton-default" id="linkbutton-default" icon="fas fa-star" />
	<LinkButton size="small" href="#linkbutton-hovered" id="#linkbutton-hovered" className="hovered" icon="fas fa-star" />
	<LinkButton size="small" href="#linkbutton-active" id="#linkbutton-active" className="active" icon="fas fa-star" />
	<LinkButton size="small" href="#linkbutton-focuses" id="#linkbutton-focuses" className="focused" icon="fas fa-star" />
	<LinkButton size="small" href="#linkbutton-disabled" id="#linkbutton-disabled" className="disabled" icon="fas fa-star" />
</div>
```