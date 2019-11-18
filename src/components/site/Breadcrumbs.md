### Breadcrumbs Light

```jsx
import Section from "../basic/containers/Section";
import BreadcrumbLinkItem from "./BreadcrumbLinkitem";
import BreadcrumbLastItem from "./BreadcrumbLastItem";

<Section>
  <Breadcrumbs>
    <BreadcrumbLinkItem text="Departments" link="/departments/health" />
    <BreadcrumbLinkItem
      text="Department of Health"
      link="/departments/health"
    />
    <BreadcrumbLastItem
      className="breadcrumb-last"
      text="Adoptable Pets"
      link="/departments/health"
    />
  </Breadcrumbs>
</Section>;
```

Html Snippet:

```html
<div class="dg_section">
  <div class="dg_breadcrumbs">
    <a
      class="breadcrumb breadcrumb-first"
      href="https://beta.baltimorecountymd.gov/prototyping/"
      >Home</a
    >
    <a class="breadcrumb" href="https://beta.baltimorecountymd.gov/prototyping/"
      >prototyping</a
    >
    <a
      class="breadcrumb breadcrumb-last"
      href="https://beta.baltimorecountymd.gov/prototyping/index.html"
      >Prototyping Homepage</a
    >
  </div>
</div>
```

### Breadcrumbs Dark

```jsx
import Section from "../basic/containers/Section";
import BreadcrumbLastItem from "./BreadcrumbLastItem";
import BreadcrumbLinkItem from "./BreadcrumbLinkitem";

<Section className="dark">
  <div style={{ padding: "15px" }}>
    <Breadcrumbs>
      <BreadcrumbLinkItem text="Departments" link="/departments" />
      <BreadcrumbLinkItem
        text="Department of Health"
        link="/departments/health"
      />
      <BreadcrumbLastItem text="Adoptable Pets" link="/departments/health" />
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
