### PageHeader

```jsx
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbItem from "./Breadcrumbitem";
import BreadcrumbLinkItem from "./BreadcrumbLinkitem";

const breadCrumbs = () => (
<Breadcrumbs>
    <BreadcrumbLinkItem
      text="Departments"
      title="This is a title"
      link="/departments"
    />
    <BreadcrumbLinkItem
      text="Department of Health"
      title="This is a title"
      link="/departments/health"
    />
    <BreadcrumbItem text="Adoptable Pets" />
  </Breadcrumbs>
);

<PageHeader
  Breadcrumbs={breadCrumbs}
  className="blue"
  backGroundImage="http://baltimorecountymd.gov/sebin/j/x/public-works-header.jpg"
  preTitle="Department Of"
  title="Public Works"
  deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
/>
```

Html Snippet:

```html
<div class="dg_page-header blue">
    <img class="dg_page-header__backgroundImage" src="http://baltimorecountymd.gov/sebin/j/x/public-works-header.jpg" aria-hidden="true">
    <div class="dg_page-header__container">
        <div class="container">
        <div class="row">
            <div class="col">
            <ul class="dg_breadcrumbs">
                <li class="dg_breadcrumb">
                    <a title="Home" href="/">
                        <i class="fas fa-home fa-1x" aria-hidden="true"></i><span class="sr-only">Home</span>
                    </a>
                </li>
                <li class="dg_breadcrumb">
                    <a title="This is a title" href="/departments">Departments</a>
                </li>
                <li class="dg_breadcrumb">
                    <a title="This is a title" href="/departments/health">Department of Health</a>
                </li>
                <li>Adoptable Pets</li>
            </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-5 col-xl-6">
                <span class="dg_page-header__pre-title">Department Of</span>
                <span class="dg_page-header__title">Public Works </span>
            </div>
            <div class="col-12 col-lg-7 col-xl-6">
            <p class="dg_page-header__deck">The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling.</p>
            </div>
        </div>
        </div>
    </div>
</div>
```
