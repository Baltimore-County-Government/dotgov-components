Content alignment will be achieved with Bootstrap 4's alignment utilities. View their documentation for [usage](https://getbootstrap.com/docs/4.3/utilities/text/#text-alignment). For example, when there is a need to align content to the left, the utility class to use would be "text-left". Cards will align content to the center by default. An example demonstrating how this would look in the markkup has been provided below.


```jsx
import Card from "./Card";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Section from "./containers/Section";

<Section>
  <div className="container">
    <div className="row">
      <div className="d-flex col-md-4">
        <Card>
          <CardContent>
            <div className="dg_icon-container">
              <i className="fas fa-star" aria-hidden="true"></i>
            </div>
            <h3>Centered With Icon</h3>
            <p>.8 acres</p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </CardContent>
          <CardFooter>
            <button type="button" className="dg_button">
              Learn More
            </button>
          </CardFooter>
        </Card>
      </div>
      <div className="d-flex col-md-4">
        <Card>
          <CardContent>
            <svg
              width="100%"
              height="150px"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <rect width="100%" height="150px" fill="#C2C2C2"></rect>
            </svg>
            <h3>Centered With Image</h3>
            <p>.8 acres</p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </CardContent>
          <CardFooter>
            <button type="button" className="dg_button">
              Learn More
            </button>
          </CardFooter>
        </Card>
      </div>
      <div className="d-flex col-md-4">
        <Card>
          <CardContent className="text-left">
            <svg
              width="100%"
              height="150px"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <rect width="100%" height="150px" fill="#C2C2C2"></rect>
            </svg>
            <h3>Align Left With Image</h3>
            <p>.8 acres</p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </CardContent>
          <CardFooter className="text-left">
            <button type="button" className="dg_button">
              Learn More
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</Section>;
```

HTML Snippet:

```html
<div className="row">
  <div className="d-flex col-md-4">
    <div class="dg_card">
      <div class="dg_card__content">
        <div class="dg_icon-container">
          <i class="fas fa-star" aria-hidden="true"></i>
        </div>
        <h3>Centered With Icon</h3>
        <p>.8 acres</p>
        <a href="https://www.google.com/maps"
          >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
        >
      </div>
      <div class="dg_card__footer">
        <button type="button" class="dg_button">Learn More</button>
      </div>
    </div>
  </div>
</div>
```

### Card Container Dark

```jsx
import Card from "./Card";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Section from "./containers/Section";

<Section className="dark">
  <div className="container">
    <div className="row">
      <div className="d-flex col-md-4">
        <Card>
          <CardContent>
            <div className="dg_icon-container">
              <i className="fas fa-star" aria-hidden="true"></i>
            </div>
            <h3>Centered With Icon</h3>
            <p>.8 acres</p>

            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </CardContent>
          <CardFooter>
            <button type="button" className="dg_button">
              Learn More
            </button>
          </CardFooter>
        </Card>
      </div>
      <div className="d-flex col-md-4">
        <Card>
          <CardContent>
            <svg
              width="100%"
              height="150px"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <rect width="100%" height="200px" fill="#C2C2C2"></rect>
            </svg>
            <h3>Centered With Image</h3>
            <p>.8 acres</p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </CardContent>
          <CardFooter>
            <button type="button" className="dg_button">
              Learn More
            </button>
          </CardFooter>
        </Card>
      </div>
      <div className="d-flex col-md-4">
        <Card>
          <CardContent className="text-left">
            <svg
              width="100%"
              height="150px"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <rect width="100%" height="200px" fill="#C2C2C2"></rect>
            </svg>
            <h3>Align Left With Image</h3>
            <p>.8 acres</p>

            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </CardContent>
          <CardFooter className="text-left">
            <button type="button" className="dg_button">
              Learn More
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</Section>;
```

HTML Snippet:

```html
<div class="dg_card">
  <div class="dg_card__content">
    <div class="dg_icon-container">
      <i class="fas fa-star" aria-hidden="true"></i>
    </div>
    <h3>Centered With Icon</h3>
    <p>.8 acres</p>
      <a href="https://www.google.com/maps"
        >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
      >
    <div class="dg_card__footer">
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
</div>
```
