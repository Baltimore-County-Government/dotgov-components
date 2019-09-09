Site header is just an empty container but we have added some components to display how it will hold certain items

```jsx
import LogoType from "./LogoType";
import SiteStatus from "./SiteStatus";
import Search from "./Search";

<SiteHeader>
  <LogoType header="Baltimore County" description="Government"></LogoType>
  <SiteStatus status="Beta"></SiteStatus>
  <Search></Search>
</SiteHeader>;
```
