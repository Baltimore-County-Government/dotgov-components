### Subpage Tabs

```jsx
import SubPageTabs from "./SubPageTabs";
import SubPageTabItem from "./SubPageTabItem";
import Section from "../basic/containers/Section";

<Section>
  <SubPageTabs text="In This Section" id="dg_menu-trigger-btn">
    <SubPageTabItem className="active" text="Newsroom" link="/home" />
    <SubPageTabItem text="Social Media Gallery" link="/home" />
    <SubPageTabItem text="Media Contact Information" link="/home" />
  </SubPageTabs>
</Section>;
```

Html Snippet:

```html
<div class="dg_subpage-tabs-container">
  <div class="container">
    <div class="dg_subpage-tabs" id="dg_tabs">
      <button
        class="dg_subpage-tabs-btn"
        type="button"
        id="dg_menu-trigger-btn"
        aria-expanded="true"
      >
        <h2 class="dg_accordion_buttontext-holder">In This Section</h2>
      </button>
      <ul class="dg_tab-items">
        <li class="active"><a href="/home">Newsroom</a></li>
        <li><a href="/home">Social Media Gallery</a></li>
        <li><a href="/home">Media Contact Information</a></li>
      </ul>
    </div>
  </div>
</div>
```
