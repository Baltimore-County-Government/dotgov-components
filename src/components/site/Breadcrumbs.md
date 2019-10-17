### Breadcrumbs Light

```jsx
import Section from "../basic/containers/Section";
import BreadcrumbItem from "./Breadcrumbitem";
import BreadcrumbLinkItem from "./BreadcrumbLinkitem";
<Section>
  <Breadcrumbs>
    <BreadcrumbLinkItem text="Departments" link="/departments" />
    <BreadcrumbLinkItem
      text="Department of Health"
      link="/departments/health"
    />
    <BreadcrumbItem text="Adoptable Pets" />
  </Breadcrumbs>
</Section>;
```

Html Snippet:

```html
<div class="dg_section">
  <ul class="dg_breadcrumbs">
    <li class="dg_breadcrumb">
      <a href="/"><i class="fas fa-home fa-1x" aria-hidden="true"></i></a>
    </li>
    <li class="dg_breadcrumb">
      <a href="/departments">Departments</a>
    </li>
    <li class="dg_breadcrumb">
      <a href="/departments/health">Department of Health</a>
    </li>
    <li>Adoptable Pets</li>
  </ul>
</div>
```

### Breadcrumbs Dark

```jsx
import Section from "../basic/containers/Section";
import BreadcrumbItem from "./Breadcrumbitem";
import BreadcrumbLinkItem from "./BreadcrumbLinkitem";

<Section className="dark">
  <div style={{ padding: "15px" }}>
    <Breadcrumbs>
      <BreadcrumbLinkItem text="Departments" link="/departments" />
      <BreadcrumbLinkItem
        text="Department of Health"
        link="/departments/health"
      />
      <BreadcrumbItem text="Adoptable Pets" />
    </Breadcrumbs>
  </div>
</Section>;
```

Html Snippet:

```html
<ul class="dg_breadcrumbs">
  <li class="dg_breadcrumb">
    <a href="/"><i class="fas fa-home fa-1x" aria-hidden="true"></i></a>
  </li>
  <li class="dg_breadcrumb">
    <a href="/departments">Departments</a>
  </li>
  <li>
    <a href="/departments/health">Department of Health</a>
  </li>
  <li>Adoptable Pets</li>
</ul>
```
