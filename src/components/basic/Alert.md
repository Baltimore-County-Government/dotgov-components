## Site Alerts

### Default Alert

```jsx
<Alert>
  <p>
    The watercooler outside of the Budget and Finance Office has been moved to
    the Historic Courthouse Mezzanine. For more information please visit our{" "}
    <a href="">Closings Page</a>
  </p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert">
  <div>
    <p>
      The watercooler outside of the Budget and Finance Office has been moved to
      the Historic Courthouse Mezzanine. For more information please visit our
      <a href="">Closings Page</a>
    </p>
  </div>
</div>
```

### Emergency Alert

```jsx
<Alert type="emergency">
  <p>
    This is a emergency alert. View our <a href="#">Emergencies Page</a>
  </p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert emergency">
  <div>
    <p>This is a emergency alert. View our <a href="#">Emergencies Page</a></p>
  </div>
</div>
```

### Success Status Alert

```jsx
<Alert className="status" type="success">
  <p>You can do something now.</p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status" type="success">
  <div>
    <span class="dg_alert__status">Success</span>
    <p>You can do something now.</p>
  </div>
</div>
```

### Success Status Alert with Icon

```jsx
<Alert className="status" type="success" icon="far fa-check">
  <p>
    You can do something now visit our <a href="">Closings Page</a>
  </p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status success">
  <div>
    <span class="dg_alert__status"
      ><i class="dg_alert__icon far fa-check" aria-hidden="true"></i
      >Success</span
    >
    <p>You can do something now.</p>
  </div>
</div>
```

### Information Status Alert

```jsx
<Alert className="status" type="information">
  <p>This is information you need to know.</p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status info">
  <div>
    <span class="dg_alert__status">Information</span>
    <p>This is information you need to know.</p>
  </div>
</div>
```

### Information Status Alert with Icon

```jsx
<Alert className="status" type="information" icon="far fa-info-circle">
  <p>
    You can do something now visit our <a href="">Closings Page</a>
  </p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status info">
  <div>
    <span class="dg_alert__status"
      ><i class="dg_alert__icon far fa-info-circle" aria-hidden="true"></i
      >Information</span
    >
    <p>This is information you need to know.</p>
  </div>
</div>
```

### Warning Status Alert

```jsx
<Alert className="status" type="warning">
  <p>This is a warning you need to know.</p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status warning">
  <div>
    <span class="dg_alert__status">Warning</span>
    <p>This is a warning you need to know.</p>
  </div>
</div>
```

### Warning Status Alert with Icon

```jsx
<Alert className="status" type="warning" icon="far fa-exclamation-triangle">
  <p>
    You can do something now visit our <a href="">Closings Page</a>
  </p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status warning">
  <div>
    <span class="dg_alert__status"
      ><i
        class="dg_alert__icon far fa-exclamation-triangle"
        aria-hidden="true"
      ></i
      >Warning</span
    >
    <p>This is a warning you need to know.</p>
  </div>
</div>
```

### Error Status Alert

```jsx
<Alert className="status" type="error">
  <p>Something went wrong.</p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status error">
  <div>
    <span class="dg_alert__status">Error</span>
    <p>Something went wrong.</p>
  </div>
</div>
```

### Error Status Alert with Icon

```jsx
<Alert className="status" type="error" icon="fas fa-exclamation-circle">
  <p>
    Something went wrong visit our <a href="">Closings Page</a>
  </p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status error">
  <div>
    <span class="dg_alert__status"
      ><i
        class="dg_alert__icon fas fa-exclamation-circle"
        aria-hidden="true"
      ></i
      >Error</span
    >
    <p>Something went wrong.</p>
  </div>
</div>
```
