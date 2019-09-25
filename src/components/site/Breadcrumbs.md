### Breadcrumbs Light

```jsx
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbItem from "./Breadcrumbitem";
import BreadcrumbLinkItem from "./BreadcrumbLinkitem";
<div class="dg_section">
  <Breadcrumbs>
    <BreadcrumbLinkItem
      text="Departments"
      title="This is a title"
      link="/departments"
    />
    <BreadcrumbLinkItem
      text="Department of Health"
      title="This is a title"
      link="/health"
    />
    <BreadcrumbItem text="Adoptable Pets" />
  </Breadcrumbs>
</div>;
```

Html Snippet:

```html
<div class="dg_section">
  <ul class="dg_breadcrumbs">
    <li>
      <a href="#"><i class="fas fa-home fa-1x" aria-hidden="true"></i></a>
    </li>
    <li><a title="This is a title" href="/departments">Departments</a></li>
    <li><a title="This is a title" href="/health">Department of Health</a></li>
    <li>Adoptable Pets</li>
  </ul>
</div>
```

### Breadcrumbs Dark

```jsx
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbItem from "./Breadcrumbitem";
import BreadcrumbLinkItem from "./BreadcrumbLinkitem";

<div
  class="dg_section dark"
  style={{ paddingLeft: "20px", paddingRight: "20px" }}
>
  <Breadcrumbs>
    <BreadcrumbLinkItem
      text="Departments"
      title="This is a title"
      link="/departments"
    />
    <BreadcrumbLinkItem
      text="Department of Health"
      title="This is a title"
      link="/health"
    />
    <BreadcrumbItem text="Adoptable Pets" />
  </Breadcrumbs>
</div>;
```

Html Snippet:

```html
<div class="dg_section dark">
  <ul class="dg_breadcrumbs">
    <li>
      <a href="#"><i class="fas fa-home fa-1x" aria-hidden="true"></i></a>
    </li>
    <li><a title="This is a title" href="/departments">Departments</a></li>
    <li><a title="This is a title" href="/health">Department of Health</a></li>
    <li>Adoptable Pets</li>
  </ul>
</div>
```
