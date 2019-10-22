### Date News Card

```jsx
import Section from "./containers/Section";
<Section>
  <div style={{ padding: "10px" }}>
    <DateNewsCard
      date="07/29/2019"
      headline="Baltimore County Marks Progress in Rehabilitation of Winters lane Homes"
      snippet="Today Baltimore County officials joined with community and..."
      link="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
    />
  </div>
</Section>;
```

Html Snippet:

```html
<a
  href="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
  class="dg_date-news-card"
>
  <header class="dg_date-news-card__header">
    <p class="dg_date-news-card__date">
      <span class="dg_date-news-card__month">Jul</span>
      <span class="dg_date-news-card__day">29</span>
    </p>
    <p class="dg_date-news-card__headline">
      Baltimore County Marks Progress in Rehabilitation of Winters lane Homes
    </p>
  </header>
  <p class="dg_date-news-card__snippet">
    Today Baltimore County officials joined with community and...
  </p>
</a>
```

### Date News Card on Dark Background

```jsx
import Section from "./containers/Section";
<Section className="dark">
  <div style={{ padding: "10px" }}>
    <DateNewsCard
      date="07/29/2019"
      headline="Baltimore County Marks Progress in Rehabilitation of Winters lane Homes"
      snippet="Today Baltimore County officials joined with community and..."
      link="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
    />
  </div>
</Section>;
```

Html Snippet:

```html
<a
  href="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
  class="dg_date-news-card"
>
  <header class="dg_date-news-card__header">
    <p class="dg_date-news-card__date">
      <span class="dg_date-news-card__month">Jul</span>
      <span class="dg_date-news-card__day">29</span>
    </p>
    <p class="dg_date-news-card__headline">
      Baltimore County Marks Progress in Rehabilitation of Winters lane Homes
    </p>
  </header>
  <p class="dg_date-news-card__snippet">
    Today Baltimore County officials joined with community and...
  </p>
</a>
```
