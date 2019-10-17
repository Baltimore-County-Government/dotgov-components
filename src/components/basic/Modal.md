### Modal

```jsx
import Button from "./Button";
import IconHeading from "./IconHeading";
import section from "../basic/containers/Section";

<section style={{ padding: "150px" }} className="dg_modal">

      <Button type="button"  data-a11y-dialog-show="my-accessible-dialog">
          Open Modal
        </Button>
        <Button type="button"  data-a11y-dialog-show="my-accessible-dialog1">
            Open Modal2
          </Button>
  <p>To see this in action, you just need <Button class="link-like" data-a11y-dialog-show="my-accessible-dialog">open the dialog window</Button>. Once it’s open, you should not be able to interact with other links on the main page <a href="https://github.com">like going to the main GitHub page.</a> The focus is said to be "trapped" inside the dialog until the user explicitely decides to leave it.</p>

  <p>On top of that, this implementation provides all the usual mandatory bits from a dialog window: correct usage or ARIA landmarks, absolute freedom in regard to the styling, closing when pressing ESC, closing when clicking the background overlay, closing when clicking the close button, a simple yet powerful DOM API, for half a kilobyte of JavaScript. It is fully tested using a headless browser to make sure it works as intended.</p>



<div class="dg_modal dialog" id="my-accessible-dialog">
  <div class="dialog-overlay" tabindex="-1" data-a11y-dialog-hide></div>
  <dialog class="dialog-content" aria-labelledby="dialog-title">
    <Button type="button" class="dialog-close" data-a11y-dialog-hide aria-label="Close this dialog window">
      &times;
    </Button>
    <h1 id="dialog-title">Dialog Title</h1>

    <p>This is content that lives inside of a dialog box. It's fully accessible which makes our users happy. And because it's inside of a dialog that pops up, it makes our designers and UX people happy as well.</p>

    <p>The focus is already on the close button. This way users do not need to tab again after reading the content in this box. Pushing ESC will also close this dialog.</p>
  </dialog>
 
</div>


<div class="dg_modal dialog" id="my-accessible-dialog1">
    <div class="dialog-overlay" tabindex="-1" data-a11y-dialog-hide></div>
    <dialog class="dialog-content" aria-labelledby="dialog-title">
      <Button type="button" class="dialog-close" data-a11y-dialog-hide aria-label="Close this dialog window">
        &times;
      </Button>
      <h1 id="dialog-title">Dialog Title2</h1>
       <p>--This is a test---- for second Dialog box.</p>
      <p>This is content that lives inside of a dialog box. It's fully accessible which makes our users happy. And because it's inside of a dialog that pops up, it makes our designers and UX people happy as well.</p>
  
      <p>The focus is already on the close button. This way users do not need to tab again after reading the content in this box. Pushing ESC will also close this dialog.</p>
    </dialog>
   
  </div>
</section>;
```

Html Snippet:

Html Snippet: Markup for Dialog Box
Name of the class of a modal should be `dg_modal`

```html
<div class="dg_modal dialog" id="my-accessible-dialog">
  <div class="dialog-overlay" tabindex="-1" data-a11y-dialog-hide></div>
  <dialog class="dialog-content" aria-labelledby="dialog-title">
    <button type="button" class="dialog-close" data-a11y-dialog-hide aria-label="Close this dialog window">
      &times;
    </button>
    <h1 id="dialog-title">Dialog Title</h1>
    <p>This is content that lives inside of a dialog box. It's fully accessible which makes our users happy. And because it's inside of a dialog that pops up, it makes our designers and UX people happy as well.</p>

    <p>The focus is already on the close button. This way users do not need to tab again after reading the content in this box. Pushing ESC will also close this dialog.</p>
  </dialog>
  </section>
</div>

```

How to associate button to Dialog Box
The `id` of the modal dialog must match the `data-a11y-dialog-show` attribute on the button that will trigger the modal.

```html
<button type="button" data-a11y-dialog-show="my-accessible-dialog">
  Open Modal
</button>
```
