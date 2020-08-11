### Scroll To Top Button

```jsx
import Section from "../basic/containers/Section";
import BreadCrumbLinkItem from "./BreadCrumbLinkItem";

<Section>
  <Breadcrumbs>
    <BreadCrumbLinkItem text="Departments" link="/departments/health" />
    <BreadCrumbLinkItem
      text="Department of Health"
      link="/departments/health"
    />
    <BreadCrumbLinkItem
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