### Modal

```jsx
import Button from "./Button";
import IconHeading from "./IconHeading";
import IconLink from "./IconLink";
import section from "../basic/containers/Section";

<section style={{ padding: "150px" }}>
  <button
    type="button"
    className="dg_button dg_modal__open-button"
    data-target="my-accessible-dialog"
  >
    Open Modal
  </button>

  <div
    className="dg_modal hidden dark"
    id="my-accessible-dialog"
    role="dialog"
    aria-labelledby="my-accessible-dialog_label"
    aria-modal="true"
  >
    <div className="text-right">
      <IconLink
        size="small"
        href="#my-accessible-dialog-close"
        id="my-accessible-dialog-close"
        type="circle"
        icon="far fa-times"
        description="Close this modal window."
        className="dg_modal__close-button"
      />
    </div>
    <IconHeading
      id="my-accessible-dialog_label"
      text="Heading"
      icon="fas fa-star"
    />
    <p>
      This is content that lives inside of a dialog box. It's fully accessible
      which makes our users happy. And because it's inside of a dialog that pops
      up, it makes our designers and UX people happy as well.
    </p>
  </div>
</section>;
```

Html Snippet:

Markup for Dialog Box
Name of the class of a modal should be `dg_modal`

```html
<div
  class="dg_modal default_dialog dark"
  id="my-accessible-dialog"
  role="dialog"
  aria-labelledby="my-accessible-dialog_label"
  aria-modal="true"
>
  <div class="text-right">
    <a
      href="#my-accessible-dialog-close"
      class="dg_icon-link dg_icon-link--small dg_icon-link--circle dg_modal__close-button"
      id="my-accessible-dialog-close"
      aria-label="Close this modal window."
    >
      <i aria-hidden="true" class="dg_icon far fa-times"></i
    ></a>
  </div>
  <div class="dg_icon-heading__container">
    <span class="dg_icon-heading__icon">
      <i class="fas fa-star" aria-hidden="true"></i>
      </span>
    <h2 class="dg_icon-heading">Heading</h2>
  </div>
  <p>
    This is content that lives inside of a dialog box. It's fully accessible
    which makes our users happy. And because it's inside of a dialog that pops
    up, it makes our designers and UX people happy as well.
  </p>
</div>
```

How to associate button to Dialog Box

```html
<button
  type="button"
  class="dg_button dg_modal__open-button"
  data-target="my-accessible-dialog"
>
  Open Modal
</button>
```
