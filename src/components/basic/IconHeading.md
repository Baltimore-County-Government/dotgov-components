### Default Icon Heading

```jsx
<section style={{ padding: "15px" }}>
  <IconHeading text="Latest Headlines" icon="fas fa-star" />
</section>
```

### H1 Icon Heading

```jsx
<section className="dg_section" style={{ padding: "15px" }}>
  <IconHeading level="1" text="Latest Headlines" icon="fas fa-star" />
</section>
```

### Icon Heading on a Light Background

```jsx
import Section from "./containers/Section";
<Section className="light">
  <div style={{ padding: "15px" }}>
    <IconHeading text="Latest Headlines" icon="fas fa-star" />
  </div>
</Section>;
```

### Icon Heading on a Dark Background

```jsx
import Section from "./containers/Section";
<Section className="dark">
  <div style={{ padding: "15px" }}>
    <IconHeading text="Latest Headlines" icon="fas fa-star" />
  </div>
</Section>;
```

Html Snippet:

```html
<div class="dg_icon-heading__container">
  <span class="dg_icon-heading__icon">
    <i class="fas fa-star" aria-hidden="true"></i>
  </span>
  <h2 class="dg_icon-heading">Latest Headlines</h2>
</div>
```

### Icon Heading with Image

```jsx
import Section from "./containers/Section";
<Section>
  <div style={{ padding: "15px" }}>
    <IconHeading
      text="Latest Headlines"
      image="//baltimorecountymd.gov/sebin/p/u/county-seal.svg"
    />
  </div>
</Section>;
```

Html Snippet:

```html
<div class="dg_icon-heading__container">
  <span class="dg_icon-heading__icon">
    <img src="//baltimorecountymd.gov/sebin/p/u/county-seal.svg" alt="" />
  </span>
  <h2 class="dg_icon-heading">Latest Headlines</h2>
</div>
```
