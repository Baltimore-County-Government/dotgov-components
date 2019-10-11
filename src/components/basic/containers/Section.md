A section is container for content.

## Default

```jsx
<Section>
  <div className="container">
    <div className="row">
      <div className="col">
        <p>Some content goes here</p>
      </div>
    </div>
  </div>
</Section>
```

Html Snippet:

```html
<section class="dg_section">
  <div class="container">
    <div class="row">
      <div class="col">
        <p>Some content goes here</p>
      </div>
    </div>
  </div>
</section>
```

## With Background Image

```jsx
import IconHeading from "../IconHeading";
import IconLink from "../IconLink";

<Section
  className="dark"
  backGroundImage="http://baltimorecountymd.gov/sebin/b/v/homepage-most-popular-background.jpg"
>
  <div className="container">
    <div className="row">
      <div className="col">
        <p>Content Goes here</p>
      </div>
    </div>
  </div>
</Section>;
```

Html Snippet:

```html
<section class="dg_section dark">
    <img class="dg_section__background-image" src="http://baltimorecountymd.gov/sebin/b/v/homepage-most-popular-background.jpg" aria-hidden="true">
    <div class="container">
        <div class="row">
            <div class="col">
                <p>Content Goes here</p>
            </div>
        </div>
    </div>
</section>
```

## Dark Section

```jsx
<Section className="dark">
  <div className="container">
    <div className="row">
      <div className="col">
        <p>Some content goes here</p>
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
        <p>Some content goes here</p>
      </div>
    </div>
  </div>
</section>
```

## Dark Section with Call to Action

```jsx
import Button from "../Button";
<Section className="dark" ctaButton={<Button text="View more content" />}>
  <div className="container">
    <div className="row">
      <div className="col">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
          et molestie ac feugiat sed lectus. Egestas congue quisque egestas diam
          in arcu. Vestibulum mattis ullamcorper velit sed{" "}
        </p>
        <p>
          Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Ipsum
          dolor sit amet consectetur adipiscing elit pellentesque. Facilisis
          mauris sit amet{" "}
        </p>
      </div>
    </div>
  </div>
</Section>;
```

Html Snippet:

```html
<section class="dg_section dark">
  <div class="container">
    <div class="row">
      <div class="col">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
          et molestie ac feugiat sed lectus. Egestas congue quisque egestas diam
          in arcu. Vestibulum mattis ullamcorper velit sed
        </p>
        <p>
          Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Ipsum
          dolor sit amet consectetur adipiscing elit pellentesque. Facilisis
          mauris sit amet
        </p>
      </div>
    </div>
  </div>
  <div class="dg_section-cta">
    <button type="button" class="dg_button">View more content</button>
  </div>
</section>
```
