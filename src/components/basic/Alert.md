## Site Alerts

### Default Alert

```jsx
<Alert>
    <p>The watercooler outside of the Budget and Finance Office has been moved to the Historic Courthouse Mezzanine. For more information please visit our <a href="">Closings Page</a></p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert">
    <div class="dg_alert__container">
        <div class="dg_alert__content">
            <p>The watercooler outside of the Budget and Finance Office has been moved to the Historic Courthouse Mezzanine. For more information please visit our <a href="">Closings Page</a></p>
        </div>
    </div>
</div>
```

### Emergency Alert

```jsx
<Alert className="emergency">
    <p>This is a emergency alert. View our <a href="#">Emergencies Page</a></p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert emergency">
    <div class="dg_alert__container">
        <div class="dg_alert__content">
            <p>This is a emergency alert. View our <a href="#">Emergencies Page</a></p>
        </div>
    </div>
</div>
```

### Success Status Alert

```jsx
<Alert className="status success">
    <span className="dg_alert__status">Success</span>
    <p>You can do something now.</p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status success">
    <div class="dg_alert__container">
        <div class="dg_alert__content">
            <span class="dg_alert__status">Success</span>
            <p>You can do something now.</p>
        </div>
    </div>
</div>
```

### Success Status Alert with Icon

```jsx
<Alert className="status success" icon="far fa-check">
    <span className="dg_alert__status">Success</span>
    <p>You can do something now visit our <a href="">Closings Page</a></p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status success">
    <div class="dg_alert__container">
        <i class="dg_alert__icon far fa-check" aria-hidden="true"></i>
        <div class="dg_alert__content">
            <span class="dg_alert__status">Success</span>
            <p>You can do something now.</p>
        </div>
    </div>
</div>
```

### Information Status Alert

```jsx
<Alert className="status info">
    <span className="dg_alert__status">Information</span>
    <p>This is information you need to know.</p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status info">
    <div class="dg_alert__container">
        <div class="dg_alert__content">
            <span class="dg_alert__status">Information</span>
            <p>This is information you need to know.</p>
        </div>
    </div>
</div>
```

### Information Status Alert with Icon

```jsx
<Alert className="status info" icon="far fa-info-circle">
    <span className="dg_alert__status">Information</span>
    <p>You can do something now  visit our <a href="">Closings Page</a></p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status info">
    <div class="dg_alert__container">
        <i class="dg_alert__icon far fa-info-circle" aria-hidden="true"></i>
        <div class="dg_alert__content">
            <span class="dg_alert__status">Information</span>
            <p>This is information you need to know.</p>
        </div>
    </div>
</div>
```

### Warning Status Alert

```jsx
<Alert className="status warning">
    <span className="dg_alert__status">Warning</span>
    <p>This is a warning you need to know.</p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status warning">
    <div class="dg_alert__container">
        <div class="dg_alert__content">
            <span class="dg_alert__status">Warning</span>
            <p>This is a warning you need to know.</p>
        </div>
    </div>
</div>
```

### Warning Status Alert with Icon

```jsx
<Alert className="status warning" icon="far fa-exclamation-triangle">
    <span className="dg_alert__status">Information</span>
    <p>You can do something now visit our <a href="">Closings Page</a></p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status warning">
    <div class="dg_alert__container">
        <i class="dg_alert__icon far fa-exclamation-triangle" aria-hidden="true"></i>
        <div class="dg_alert__content">
            <span class="dg_alert__status">Warning</span>
            <p>This is a warning you need to know.</p>
        </div>
    </div>
</div>
```

### Error Status Alert

```jsx
<Alert className="status error">
    <span className="dg_alert__status">Error</span>
    <p>Something went wrong.</p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status error">
    <div class="dg_alert__container">
        <div class="dg_alert__content">
            <span class="dg_alert__status">Error</span>
            <p>Something went wrong.</p>
        </div>
    </div>
</div>
```

### Error Status Alert with Icon

```jsx
<Alert className="status error" icon="fas fa-exclamation-circle">
    <span className="dg_alert__status">Error</span>
    <p>Something went wrong visit our <a href="">Closings Page</a></p>
</Alert>
```

Html Snippet:

```html
<div class="dg_alert status error">
    <div class="dg_alert__container">
        <i class="dg_alert__icon fas fa-exclamation-circle" aria-hidden="true"></i>
        <div class="dg_alert__content">
            <span class="dg_alert__status">Error</span>
            <p>Something went wrong.</p>
        </div>
    </div>
</div>
```