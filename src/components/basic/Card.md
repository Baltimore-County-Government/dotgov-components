### Card Container Default Centered

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
          <h3>Centered Card</h3>
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
          <div className="dg_icon-container">
            <i className="fas fa-star" aria-hidden="true"></i>
          </div>
          <h3>Left Aligned</h3>
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
          <div className="dg_icon-container">
            <i className="fas fa-star" aria-hidden="true"></i>
          </div>
          <h3>Multiple Alignments</h3>
          <p className="text-left">.8 acres</p>
          <p>
            <a href="https://www.google.com/maps">
              300 Lennox Avenue Room 202 Towson, Maryland 21286
            </a>
          </p>
        </CardContent>
        <CardFooter className="text-right">
          <button type="button" class="dg_button">
            Learn More
          </button>
        </CardFooter>
      </Card>
    </div>
  </div>
</Section>;
```
