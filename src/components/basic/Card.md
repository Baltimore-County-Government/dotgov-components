### Card Container Light

```jsx
import Card from "./Card";
import CardContentCenter from "./CardContentCenter";
import CardContentLeft from "./CardContentLeft";
import CardFooterCenter from "./CardFooterCenter";
import CardFooterLeft from "./CardFooterLeft";
import Section from "./containers/Section";

<Section>
  <div className="row">
    <div className="d-flex col-md-4">
      <Card>
        <CardContentCenter>
          <div className="dg_icon-container">
            <i className="fas fa-star" aria-hidden="true"></i>
          </div>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContentCenter>
        <CardFooterCenter>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooterCenter>
      </Card>
    </div>
    <div className="d-flex col-md-4">
      <Card>
        <CardContentCenter>
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#55595c"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContentCenter>
        <CardFooterCenter>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooterCenter>
      </Card>
    </div>
    <div className="d-flex col-md-4">
      <Card>
        <CardContentCenter>
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#55595c"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContentCenter>
        <CardFooterCenter>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooterCenter>
      </Card>
    </div>
    <div className="d-flex col-md-4">
      <Card>
        <CardContentLeft>
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#55595c"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContentLeft>
        <CardFooterLeft>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooterLeft>
      </Card>
    </div>
    <div className="d-flex col-md-4">
      <Card>
        <CardContentLeft>
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#55595c"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContentLeft>
        <CardFooterLeft>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooterLeft>
      </Card>
    </div>
  </div>
</Section>;
```

Html Snippet:

```html
<
<div class="row">
  <div class="d-flex col-md-4">
    <div class="dg_card">
      <div class="dg_card-content-center">
        <div class="dg_icon-container">
          <i class="fas fa-star" aria-hidden="true"></i>
        </div>
        <h3>Carver Community Center</h3>
        <p>.8 acres</p>
        <p>
          <a href="https://www.google.com/maps"
            >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
          >
        </p>
      </div>
      <div class="dg_card-footer-center">
        <button type="button" class="dg_button">Learn More</button>
      </div>
    </div>
  </div>
  <div class="d-flex col-md-4">
    <div class="dg_card">
      <div class="dg_card-content-center">
        <svg
          width="100%"
          height="170px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Image"
        >
          <title>Placeholder</title>
          <rect width="100%" height="150px" fill="#55595c"></rect>
        </svg>
        <h3>Carver Community Center</h3>
        <p>.8 acres</p>
        <p>
          <a href="https://www.google.com/maps"
            >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
          >
        </p>
      </div>
      <div class="dg_card-footer-center">
        <button type="button" class="dg_button">Learn More</button>
      </div>
    </div>
  </div>
  <div class="d-flex col-md-4">
    <div class="dg_card">
      <div class="dg_card-content-center">
        <svg
          width="100%"
          height="170px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Image"
        >
          <title>Placeholder</title>
          <rect width="100%" height="150px" fill="#55595c"></rect>
        </svg>
        <h3>Carver Community Center</h3>
        <p>.8 acres</p>
        <p>
          <a href="https://www.google.com/maps"
            >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
          >
        </p>
      </div>
      <div class="dg_card-footer-center">
        <button type="button" class="dg_button">Learn More</button>
      </div>
    </div>
  </div>
  <div class="d-flex col-md-4">
    <div class="dg_card">
      <div class="dg_card-content-left">
        <svg
          width="100%"
          height="170px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Image"
        >
          <title>Placeholder</title>
          <rect width="100%" height="150px" fill="#55595c"></rect>
        </svg>
        <h3>Carver Community Center</h3>
        <p>.8 acres</p>
        <p>
          <a href="https://www.google.com/maps"
            >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
          >
        </p>
      </div>
      <div class="dg_card-footer-left">
        <button type="button" class="dg_button">Learn More</button>
      </div>
    </div>
  </div>
  <div class="d-flex col-md-4">
    <div class="dg_card">
      <div class="dg_card-content-left">
        <svg
          width="100%"
          height="170px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Image"
        >
          <title>Placeholder</title>
          <rect width="100%" height="150px" fill="#55595c"></rect>
        </svg>
        <h3>Carver Community Center</h3>
        <p>.8 acres</p>
        <p>
          <a href="https://www.google.com/maps"
            >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
          >
        </p>
      </div>
      <div class="dg_card-footer-left">
        <button type="button" class="dg_button">Learn More</button>
      </div>
    </div>
  </div>
</div>
```

### Card Container Dark

```jsx
import Card from "./Card";
import CardContentCenter from "./CardContentCenter";
import CardContentLeft from "./CardContentLeft";
import CardFooterCenter from "./CardFooterCenter";
import CardFooterLeft from "./CardFooterLeft";
import Section from "./containers/Section";

<Section className="dark">
  <div className="row">
    <div className="d-flex col-md-4">
      <Card>
        <CardContentCenter>
          <div className="dg_icon-container">
            <i className="fas fa-star" aria-hidden="true"></i>
          </div>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContentCenter>
        <CardFooterCenter>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooterCenter>
      </Card>
    </div>
    <div className="d-flex col-md-4">
      <Card>
        <CardContentCenter>
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#C2C2C2"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContentCenter>
        <CardFooterCenter>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooterCenter>
      </Card>
    </div>
    <div className="d-flex col-md-4">
      <Card>
        <CardContentCenter>
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#C2C2C2"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContentCenter>
        <CardFooterCenter>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooterCenter>
      </Card>
    </div>
    <div className="d-flex col-md-4">
      <Card>
        <CardContentLeft>
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#C2C2C2"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContentLeft>
        <CardFooterLeft>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooterLeft>
      </Card>
    </div>
    <div className="d-flex col-md-4">
      <Card>
        <CardContentLeft>
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#C2C2C2"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContentLeft>
        <CardFooterLeft>
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooterLeft>
      </Card>
    </div>
  </div>
</Section>;
```

Html Snippet:

```html
<div class="dg_section dark">
  <div class="row">
    <div class="d-flex col-md-4">
      <div class="dg_card">
        <div class="dg_card-content-center">
          <div class="dg_icon-container">
            <i class="fas fa-star" aria-hidden="true"></i>
          </div>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps"
              >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
            >
          </p>
        </div>
        <div class="dg_card-footer-center">
          <button type="button" class="dg_button">Learn More</button>
        </div>
      </div>
    </div>
    <div class="d-flex col-md-4">
      <div class="dg_card">
        <div class="dg_card-content-center">
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#C2C2C2"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps"
              >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
            >
          </p>
        </div>
        <div class="dg_card-footer-center">
          <button type="button" class="dg_button">Learn More</button>
        </div>
      </div>
    </div>
    <div class="d-flex col-md-4">
      <div class="dg_card">
        <div class="dg_card-content-center">
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#C2C2C2"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps"
              >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
            >
          </p>
        </div>
        <div class="dg_card-footer-center">
          <button type="button" class="dg_button">Learn More</button>
        </div>
      </div>
    </div>
    <div class="d-flex col-md-4">
      <div class="dg_card">
        <div class="dg_card-content-left">
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#C2C2C2"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps"
              >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
            >
          </p>
        </div>
        <div class="dg_card-footer-left">
          <button type="button" class="dg_button">Learn More</button>
        </div>
      </div>
    </div>
    <div class="d-flex col-md-4">
      <div class="dg_card">
        <div class="dg_card-content-left">
          <svg
            width="100%"
            height="170px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image"
          >
            <title>Placeholder</title>
            <rect width="100%" height="150px" fill="#C2C2C2"></rect>
          </svg>
          <h3>Carver Community Center</h3>
          <p>.8 acres</p>
          <p>
            <a href="https://www.google.com/maps"
              >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
            >
          </p>
        </div>
        <div class="dg_card-footer-left">
          <button type="button" class="dg_button">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</div>
```
