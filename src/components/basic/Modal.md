### Modal

```jsx
import Button from "./Button";
import IconHeading from "./IconHeading";
import IconLink from "./IconLink";
import section from "../basic/containers/Section";

<section style={{ padding: "150px" }}>
  <button
    type="button"
    className="dg_button"
    data-a11y-dialog-show="my-accessible-dialog"
  >
    Open Modal
  </button>

  <div class="dg_modal dialog" id="my-accessible-dialog">
    <div class="dialog-overlay" tabindex="-1" data-a11y-dialog-hide></div>
    <dialog class="dialog-content" aria-labelledby="dialog-title">
      <div className="dg_icon-link">
        <button
          type="button"
          class="dialog-close"
          data-a11y-dialog-hide
          aria-label="Close this dialog window"
        >
          <IconLink size="small" icon="far fa-times" />
        </button>
      </div>
      <div className="dg_modal__inner">
        <IconHeading text="Heading" icon="fas fa-star" />
        <p>
          This is content that lives inside of a dialog box. It's fully
          accessible which makes our users happy. And because it's inside of a
          dialog that pops up, it makes our designers and UX people happy as
          well.
        </p>
      </div>
    </dialog>
  </div>
</section>;
```


Html Snippet:

Markup for Dialog Box
Name of the class of a modal should be `dg_modal`

```html
 <div class="dg_modal dialog" id="my-accessible-dialog">
    <div class="dialog-overlay" tabindex="-1" data-a11y-dialog-hide></div>
    <dialog class="dialog-content" aria-labelledby="dialog-title">
      <div className="dg_icon-link">
        <button
          type="button"
          class="dialog-close"
          data-a11y-dialog-hide
          aria-label="Close this dialog window"
        >
          <IconLink size="small" icon="far fa-times" />
        </button>
      </div>
      <div className="dg_modal__inner">
        <IconHeading text="Heading" icon="fas fa-star" />
        <p>
          This is content that lives inside of a dialog box. It's fully
          accessible which makes our users happy. And because it's inside of a
          dialog that pops up, it makes our designers and UX people happy as
          well.
        </p>
      </div>
    </dialog>
  </div>
</div>

```

How to associate button to Dialog Box

The `id` of the modal dialog must match the `data-a11y-dialog-show` attribute on the button that will trigger the modal.

```html
<button type="button" data-a11y-dialog-show="my-accessible-dialog">
  Open Modal
</button>
```
