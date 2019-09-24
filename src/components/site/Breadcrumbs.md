### Unordered List

```jsx
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbItem from "./Breadcrumbitem";
import BreadcrumbLinkItem from "./BreadcrumbLinkitem";


<Breadcrumbs>
  <BreadcrumbLinkItem
    breadcrumbText="Departments"
    title="This is a title"
    link="#"
  />
  <BreadcrumbLinkItem
    breadcrumbText="Department of Health"
    title="This is a title"
    link="#"
  />
  <BreadcrumbItem
    breadcrumbText="Adoptable Pets"
  />
</Breadcrumbs>;
```

Html Snippet:

```html
<ul class="dg_alt-list">
  <li>
    <a href="#" title="Link title">Item One</a>
  </li>
  <li>
    <a href="#" title="Link title">Item Two</a>
  </li>
  <li>
    <a href="#" title="Link title">Item Three</a>
  </li>
  <li>
    <a href="#" title="Link title">Item Four</a>
  </li>
</ul>
```
