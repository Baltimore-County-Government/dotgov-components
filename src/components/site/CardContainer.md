### Card Container Light

```jsx
import CardItem from "./CardItem";
import CardContentCenter from "./CardContentCenter";
import CardContentLeft from "./CardContentLeft";

<CardContainer>
  <CardItem>
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
      <button type="button" class="dg_button">
        Learn More
      </button>
    </CardContentCenter>
  </CardItem>
  <CardItem>
    <CardContentCenter>
      <svg
        class="bd-placeholder-img card-img-top"
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
      <button type="button" class="dg_button">
        Learn More
      </button>
    </CardContentCenter>
  </CardItem>
  <CardItem>
    <CardContentCenter>
      <svg
        class="bd-placeholder-img card-img-top"
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
      <button type="button" class="dg_button">
        Learn More
      </button>
    </CardContentCenter>
  </CardItem>
  <CardItem>
    <CardContentLeft>
      <svg
        class="bd-placeholder-img card-img-top"
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
      <button type="button" class="dg_button">
        Learn More
      </button>
    </CardContentLeft>
  </CardItem>
  <CardItem>
    <CardContentLeft>
      <svg
        class="bd-placeholder-img card-img-top"
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
      <button type="button" class="dg_button">
        Learn More
      </button>
    </CardContentLeft>
  </CardItem>
</CardContainer>;
```

Html Snippet:

```html
<div class="dg_card-container">
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
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
  <div class="dg_card">
    <div class="dg_card-content-center">
      <svg
        class="bd-placeholder-img card-img-top"
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
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
  <div class="dg_card">
    <div class="dg_card-content-center">
      <svg
        class="bd-placeholder-img card-img-top"
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
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
  <div class="dg_card">
    <div class="dg_card-content-left">
      <svg
        class="bd-placeholder-img card-img-top"
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
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
  <div class="dg_card">
    <div class="dg_card-content-left">
      <svg
        class="bd-placeholder-img card-img-top"
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
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
</div>
```

### Card Container Dark

```jsx
import CardItem from "./CardItem";
import CardContentCenter from "./CardContentCenter";
import CardContentLeft from "./CardContentLeft";
<div class="dg_section dark">
  <CardContainer>
    <CardItem>
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
        <button type="button" class="dg_button">
          Learn More
        </button>
      </CardContentCenter>
    </CardItem>
    <CardItem>
      <CardContentCenter>
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="170px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Image"
        >
          <title>Placeholder</title>
          <rect width="100%" height="150px" fill="#c2c2c2"></rect>
        </svg>
        <h3>Carver Community Center</h3>
        <p>.8 acres</p>
        <p>
          <a href="https://www.google.com/maps">
            300 Lennox Avenue Room 202 Towson, Maryland 21286
          </a>
        </p>
        <button type="button" class="dg_button">
          Learn More
        </button>
      </CardContentCenter>
    </CardItem>
    <CardItem>
      <CardContentCenter>
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="170px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Image"
        >
          <title>Placeholder</title>
          <rect width="100%" height="150px" fill="#c2c2c2"></rect>
        </svg>
        <h3>Carver Community Center</h3>
        <p>.8 acres</p>
        <p>
          <a href="https://www.google.com/maps">
            300 Lennox Avenue Room 202 Towson, Maryland 21286
          </a>
        </p>
        <button type="button" class="dg_button">
          Learn More
        </button>
      </CardContentCenter>
    </CardItem>
    <CardItem>
      <CardContentLeft>
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="170px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Image"
        >
          <title>Placeholder</title>
          <rect width="100%" height="150px" fill="#c2c2c2"></rect>
        </svg>
        <h3>Carver Community Center</h3>
        <p>.8 acres</p>
        <p>
          <a href="https://www.google.com/maps">
            300 Lennox Avenue Room 202 Towson, Maryland 21286
          </a>
        </p>
        <button type="button" class="dg_button">
          Learn More
        </button>
      </CardContentLeft>
    </CardItem>
    <CardItem>
      <CardContentLeft>
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="170px"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Image"
        >
          <title>Placeholder</title>
          <rect width="100%" height="150px" fill="#c2c2c2"></rect>
        </svg>
        <h3>Carver Community Center</h3>
        <p>.8 acres</p>
        <p>
          <a href="https://www.google.com/maps">
            300 Lennox Avenue Room 202 Towson, Maryland 21286
          </a>
        </p>
        <button type="button" class="dg_button">
          Learn More
        </button>
      </CardContentLeft>
    </CardItem>
  </CardContainer>
</div>;
```

Html Snippet:

```html
<div class="dg_card-container">
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
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
  <div class="dg_card">
    <div class="dg_card-content-center">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="170px"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Image"
      >
        <title>Placeholder</title>
        <rect width="100%" height="150px" fill="#c2c2c2"></rect>
      </svg>
      <h3>Carver Community Center</h3>
      <p>.8 acres</p>
      <p>
        <a href="https://www.google.com/maps"
          >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
        >
      </p>
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
  <div class="dg_card">
    <div class="dg_card-content-center">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="170px"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Image"
      >
        <title>Placeholder</title>
        <rect width="100%" height="150px" fill="#c2c2c2"></rect>
      </svg>
      <h3>Carver Community Center</h3>
      <p>.8 acres</p>
      <p>
        <a href="https://www.google.com/maps"
          >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
        >
      </p>
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
  <div class="dg_card">
    <div class="dg_card-content-left">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="170px"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Image"
      >
        <title>Placeholder</title>
        <rect width="100%" height="150px" fill="#c2c2c2"></rect>
      </svg>
      <h3>Carver Community Center</h3>
      <p>.8 acres</p>
      <p>
        <a href="https://www.google.com/maps"
          >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
        >
      </p>
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
  <div class="dg_card">
    <div class="dg_card-content-left">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="170px"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Image"
      >
        <title>Placeholder</title>
        <rect width="100%" height="150px" fill="#c2c2c2"></rect>
      </svg>
      <h3>Carver Community Center</h3>
      <p>.8 acres</p>
      <p>
        <a href="https://www.google.com/maps"
          >300 Lennox Avenue Room 202 Towson, Maryland 21286</a
        >
      </p>
      <button type="button" class="dg_button">Learn More</button>
    </div>
  </div>
</div>
```
