### Card Container Default

```jsx
import Card from "./Card";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Section from "./containers/Section";

<Section>
  <div className="row">
    <div className="d-flex col-md-4">
      <Card className="text-center">
        <CardContent>
          <div className="dg_icon-container">
            <i className="fas fa-star" aria-hidden="true"></i>
          </div>
          <h3>Centered With Icon</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContent>
        <CardFooter>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooter>
      </Card>
    </div>
    <div className="d-flex col-md-4">
      <Card className="text-center">
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
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContent>
        <CardFooter>
          <button type="button" class="dg_button">
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
          <h3>Align Left With Image</h3>
          <p className="text-left">.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContent>
        <CardFooter>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooter>
      </Card>
    </div>
  </div>
</Section>;
```

### Card Container Dark

```jsx
import Card from "./Card";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import Section from "./containers/Section";

<Section className="dark">
  <div className="row">
    <div className="d-flex col-md-4">
      <Card className="text-center">
        <CardContent>
          <div className="dg_icon-container">
            <i className="fas fa-star" aria-hidden="true"></i>
          </div>
          <h3>Centered With Icon</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContent>
        <CardFooter>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooter>
      </Card>
    </div>
    <div className="d-flex col-md-4">
      <Card className="text-center">
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
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContent>
        <CardFooter>
          <button type="button" class="dg_button">
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
          <h3>Align Left With Image</h3>
          <p className="text-left">.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContent>
        <CardFooter>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooter>
      </Card>
    </div>
  </div>
</Section>;
```
