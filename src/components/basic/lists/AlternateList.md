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
    <a href="#">Item One <i className="fas fa-arrow-circle-right"></i></a>
  </li>
  <li>
    <a href="#">Item Two <i className="fas fa-arrow-circle-right"></i></a>
  </li>
  <li>
    <a href="#">Item Three <i className="fas fa-arrow-circle-right"></i></a>
  </li>
  <li>
    <a href="#">Item Four <i className="fas fa-arrow-circle-right"></i></a>
  </li>
</ul>
```
