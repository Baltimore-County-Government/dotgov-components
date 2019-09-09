Site header is just an empty container but we have added some components to display how it will hold certain items

```jsx
import LogoType from "./LogoType";
import SiteStatus from "./SiteStatus";

<SiteHeader>
    <LogoType header="Baltimore County" description="Government" />
    <SiteStatus status="Beta" />
</SiteHeader>
```