### Subpage Tabs

```jsx
import Section from "../basic/containers/Section";
import BreadcrumbLinkItem from "./BreadcrumbLinkitem";

<Section>
  <Breadcrumbs>
    <BreadcrumbLinkItem text="Departments" link="/departments/health" />
    <BreadcrumbLinkItem
      text="Department of Health"
      link="/departments/health"
    />
    <BreadcrumbLinkItem
      className="breadcrumb-last"
      text="Adoptable Pets"
      link="/departments/health"
    />
  </Breadcrumbs>
</Section>;
```

Html Snippet:

```html
<div class="dark">
  <ul></ul>
</div>
```
