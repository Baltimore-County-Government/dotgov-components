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