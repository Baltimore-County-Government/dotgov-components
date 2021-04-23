### Unordered List

### This is a standard alt list that does not highlight based on current selected page

```jsx
import AlternateListItem from "./AlternateListItem";

<AlternateList className="dg_alt-list">
  <AlternateListItem link="#" linkText="Item One" />
  <AlternateListItem link="#" linkText="Item Two" />
  <AlternateListItem link="#" linkText="Item Three" />
  <AlternateListItem link="#" linkText="Item Four" />
</AlternateList>;
```

### This is a side bar related link alt list that does highlight based on current selected page. This also requires an icon be added to the list item

```jsx
import AlternateListItem from "./AlternateListItem";
<AlternateList className="dg_sidebar-alt-list">
  <AlternateListItem
    icon="fas fa-arrow-circle-right"
    link="http://localhost:6060/#alternatelist"
    linkText="Item One"
  />
  <AlternateListItem
    icon="fas fa-arrow-circle-right"
    link="#"
    linkText="Item Two"
  />
  <AlternateListItem
    icon="fas fa-arrow-circle-right"
    link="#"
    linkText="Item Three"
  />
  <AlternateListItem
    icon="fas fa-arrow-circle-right"
    link="#"
    linkText="Item Four"
  />
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

<ul class="dg_sidebar-alt-list">
  <li className="dg_sidebar-alt-list-current">
    <a href="#">Item One <i class="fas fa-arrow-circle-right"></i></a>
  </li>
  <li>
    <a href="#">Item Two <i class="fas fa-arrow-circle-right"></i></a>
  </li>
  <li>
    <a href="#">Item Three <i class="fas fa-arrow-circle-right"></i></a>
  </li>
  <li>
    <a href="#">Item Four <i class="fas fa-arrow-circle-right"></i></a>
  </li>
</ul>
```
