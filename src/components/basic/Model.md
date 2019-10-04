### Model

```jsx
import Button from "./Button";
import IconHeading from "./IconHeading";
import Model from "./Model";

<section style={{ padding: "15px" }} className="dg_model">
      <section className="dg_section dark dg_model__inner">
      <IconHeading text="Heading" icon="fas fa-star" />
        <Model content="<p>Do you have the ability to repeat the following statement?:How much wood would a woodchuck chuck if a woodchuck could chcuk wood?</p>" />
        <div
          className="modal-footer"
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Button text="NO" />
          <Button text="YES" />
        </div>
      </section>
</section>;
```
<!--     <IconHeading text="Heading" icon="fas fa-star" />  -->