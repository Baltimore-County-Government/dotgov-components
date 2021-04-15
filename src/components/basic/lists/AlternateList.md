### Unordered List

```jsx
import AlternateListItem from "./AlternateListItem";
<AlternateList>
  <AlternateListItem
    link="#"
    linkText="Item One"
    className="dg_alt-list-current"
  />
  <AlternateListItem link="#" linkText="Item Two" />
  <AlternateListItem link="#" linkText="Item Three" />
  <AlternateListItem link="#" linkText="Item Four" />
</AlternateList>;
```

Html Snippet:

```html
<ul class="dg_alt-list">
  <li className="dg_alt-list-current">
    <a href="#">Item One</a>
  </li>
  <li>
    <a href="#">Item Two</a>
  </li>
  <li>
    <a href="#">Item Three</a>
  </li>
  <li>
    <a href="#">Item Four</a>
  </li>
</ul>
```
