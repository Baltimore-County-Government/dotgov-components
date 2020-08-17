### Scroll To Top Button

This component can be seen in the bottom right corner of the window. As you scroll down the page, the icon will appear and will take you to the top of the page, when clicked.

```jsx
import Section from "../basic/containers/Section";
import ScrollToTop from "./ScrollToTop";

<Section>
  <ScrollToTop></ScrollToTop>
</Section>;
```

Html Snippet:

```html
<div class="dg_section">
  <a href="#" id="dg_back-to-top" title="Back to top">
    <i
      class="dg_scroll-top-icon fad fa-chevron-circle-up fa-2x"
      aria-hidden="true"
    ></i>
  </a>
</div>
```
