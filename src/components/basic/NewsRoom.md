
```jsx
import NewsRoom from "./NewsRoom";
import DateNewsCard from "./DateNewsCard";
  <NewsRoom>
   <DateNewsCard
        date="07/29/2019"
        headline="Baltimore County Marks Progress in Rehabilitation of Winters lane Homes"
        snippet="Today Baltimore County officials joined with community and..."
        link="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
    />
  </NewsRoom>
```
Html Snippet:

```html
<div class="dg_icon-heading__container">
  <i class="fa fa-newspaper" aria-hidden="true"></i>
    <h2 class="dg_icon-heading">Latest Headlines</h2>
</div>
<div>
<a href="//www.baltimorecountymd.gov/News/BaltimoreCountyNow" class="dg_date-news-card">
    <header class="dg_date-news-card__header">
        <p class="dg_date-news-card__date">
            <span class="dg_date-news-card__month">Jul</span>
            <span class="dg_date-news-card__day">29</span>
        </p>
        <p class="dg_date-news-card__headline">Baltimore County Marks Progress in Rehabilitation of Winters lane Homes</p>
    </header>
    <p class="dg_date-news-card__snippet">Today Baltimore County officials joined with community and...</p>
</a>
</div>
```

### News Room on Dark Background

```jsx
import NewsRoom from "./NewsRoom";
import DateNewsCard from "./DateNewsCard";
<div style={{ padding: '10px'}} className="dg_section dark">
 <NewsRoom>
    <DateNewsCard
        date="07/29/2019"
        headline="Baltimore County Marks Progress in Rehabilitation of Winters lane Homes"
        snippet="Today Baltimore County officials joined with community and..."
        link="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
    />
 </NewsRoom>
</div>
```

Html Snippet:

```html
<div class="dg_icon-heading__container">
  <i class="fa fa-newspaper" aria-hidden="true"></i>
    <h2 class="dg_icon-heading">Latest Headlines</h2>
</div>
<div>
<a href="//www.baltimorecountymd.gov/News/BaltimoreCountyNow" class="dg_date-news-card">
    <header class="dg_date-news-card__header">
        <p class="dg_date-news-card__date">
            <span class="dg_date-news-card__month">Jul</span>
            <span class="dg_date-news-card__day">29</span>
        </p>
        <p class="dg_date-news-card__headline">Baltimore County Marks Progress in Rehabilitation of Winters lane Homes</p>
    </header>
    <p class="dg_date-news-card__snippet">Today Baltimore County officials joined with community and...</p>
</a>
```
