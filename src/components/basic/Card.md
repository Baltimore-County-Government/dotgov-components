Content alignment will be achieved with Bootstrap 4's alignment utilities. View their documentation for [usage](https://getbootstrap.com/docs/4.3/utilities/text/#text-alignment). For example, when there is a need to align content to the left, the utility class to use would be "text-left". Cards will align content to the center by default. An example demonstrating how this would look in the markkup has been provided below.

```jsx
import Card from "./Card";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Section from "./containers/Section";
import ImagePlaceholder from "./ImagePlaceholder";

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
            <ImagePlaceholder />
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
            <ImagePlaceholder />
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
import ImagePlaceholder from "./ImagePlaceholder";

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
            <ImagePlaceholder />
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
            <ImagePlaceholder />
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

### Card Container Image Left to Right

```jsx
import Card from "./Card";
import CardContent from "./CardContent";
import Section from "./containers/Section";

<Section>
  <div className="container">
    <div className="row">
      <div className="d-flex col-md-4">
        <Card>
          <CardContent>
            <div className="row align-items-center">
              <div className="col-md-2 col-xs-12">
                <i className="fas fa-snowflake"></i>
              </div>
              <div className="col-md-10 col-xs-12">
                <p>Less Than 6 inches</p>
                <h3>24 Hours</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="d-flex col-md-4">
        <Card>
          <CardContent>
            <div className="row align-items-center">
              <div className="col-md-2 col-xs-12">
                <i className="fas fa-snowflakes"></i>
              </div>
              <div className="col-md-10 col-xs-12">
                <p>More Than 6 inches</p>
                <h3>48 Hours</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="d-flex col-md-4">
        <Card>
          <CardContent>
            <div className="row align-items-center">
              <div className="col-md-2 col-xs-12">
                <i className="fas fa-truck-plow"></i>
              </div>
              <div className="col-md-10 col-xs-12">
                <h3>423</h3>
                <p>trucks and equipment</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</Section>;
```

```html
<div class="container">
  <div class="row">
    <div class="col-md-4 d-flex">
      <div class="dg_card">
        <div class="row align-items-center">
          <div class="col-md-2 col-xs-12">
            <i class="fas fa-snowflake"></i>
          </div>
          <div class="col-md-10 col-xs-12">
            <p>Less Than 6 inches</p>
            <h3>24 Hours</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4  d-flex">
      <div class="dg_card">
        <div class="row align-items-center">
          <div class="col-md-2 col-xs-12">
            <i style="font-size: 30px" class="fas fa-snowflakes"></i>
          </div>
          <div class="col-md-10 col-xs-12">
            <p>More Than 6 inches</p>
            <h3>48 Hours</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
