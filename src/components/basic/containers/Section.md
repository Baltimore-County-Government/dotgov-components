A section is container for content.

## Default

```jsx
<Section>
  <p>Some content goes here</p>
</Section>
```

Html Snippet:

```html
<section class="dg_section"><p>Some content goes here</p></section>
```

## Dark Section

```jsx
<Section className="dark">
  <p>Some content goes here</p>
</Section>
```

Html Snippet:

```html
<section class="dg_section dark"><p>Some content goes here</p></section>
```

## Dark Section with Call to Action

```jsx
import Button from '../Button'
;<Section
    className="dark"
    ctaButton={<Button text="View more content" />}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus. Egestas congue quisque egestas diam in arcu. Vestibulum mattis ullamcorper velit sed </p>
                    <p>Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Facilisis mauris sit amet </p>
                </div>
            </div>
        </div>
</Section>
```

Html Snippet:

```html
<section class="dg_section dark">
  <div class="container">
    <div class="row">
      <div class="col">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus. Egestas congue quisque egestas diam in arcu. Vestibulum mattis ullamcorper velit sed </p>
        <p>Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Facilisis mauris sit amet </p>
      </div>
    </div>
  </div>
  <div class="dg_section-cta"><button type="button" class="dg_button">View more content</button></div>
</section>

```