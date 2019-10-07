### Model

```jsx
import Button from "./Button";
import IconHeading from "./IconHeading";
import section from "../basic/containers/Section";

<section style={{ padding: "150px" }} className="dg_model">
  <section className="dg_section dark">
    <div className="dg_model_flex">
      <Button className="dg_model_flex__button" text="X" />
    </div>
    <div className="dg_model__inner">
      <IconHeading text="Heading" icon="fas fa-star" />
      <div class="dg_model__context">
        <p>
          Do you have the ability to repeat the following statement?:How much
          wood would a woodchuck chuck if a woodchuck could chcuk wood?
        </p>
      </div>

      <div className="dg_model_footer">
        <Button text="NO" />
        <Button text="YES" />
      </div>
    </div>
  </section>
</section>;
```

Html Snippet:

```html
<section class="dg_model" style="padding: 150px;">
  <section class="dg_section dark">
    <div class="dg_model_flex">
      <button type="button" class="dg_button dg_model_flex__button">X</button>
    </div>
    <div class="dg_model__inner">
      <div class="dg_icon-heading__container">
        <i class="fas fa-star" aria-hidden="true"></i>
        <h2 class="dg_icon-heading">Heading</h2>
      </div>
      <div class="dg_model__context">
        <p>
          Do you have the ability to repeat the following statement?:How much
          wood would a woodchuck chuck if a woodchuck could chcuk wood?
        </p>
      </div>
      <div class="dg_model_footer">
        <button type="button" class="dg_button">NO</button
        ><button type="button" class="dg_button">YES</button>
      </div>
    </div>
  </section>
</section>
```
