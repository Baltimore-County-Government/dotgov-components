### Subpage Tabs

```jsx
import SubPageTabs from "./SubPageTabs";
import SubPageTabItem from "./SubPageTabItem";
import Section from "../basic/containers/Section";

<Section>
  <SubPageTabs text="In This Section" id="testing">
    <SubPageTabItem className="active" text="Newsroom" link="/home" />
    <SubPageTabItem text="Social Media Gallery" link="/home" />
    <SubPageTabItem text="Media Contact Information" link="/home" />
  </SubPageTabs>
</Section>;
```

Html Snippet:

```html
<div class="dark">
  <ul></ul>
</div>
```
