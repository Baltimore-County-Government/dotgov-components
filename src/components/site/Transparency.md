

### Transparency
```jsx
import SectionTransparency from "./SectionTransparency";
<div className="container your-govt">
  <SectionTransparency></SectionTransparency>
</div>;
<div style={{ padding: '10px'}}>
	<Transparency
		icon="fa fa-bullhorn"
        size="large"
        type="circle"
		description="Visit our users dashboard to learn more."
		text="PUBLIC NOTICES"
		href="https://www.w3schools.com" />
	<Transparency
		icon="fa fa-calendar-alt"
        size="large"
        type="circle"
		description="Visit our users dashboard to learn more."
		text="MEETING AND EVENTS"
		href="https://www.w3schools.com" />
	<Transparency
        icon="fa fa-clipboard"
          type="circle"
		size="large"
		description="Visit our users dashboard to learn more."
		text="BOARDS AND COMMISSIONS"
		href="https://www.w3schools.com" />
	<Transparency
        icon="fa fa-chart-line"
          type="circle"
		size="large"
		description="Visit our users dashboard to learn more."
		text="OPEN DATA"
		href="https://www.w3schools.com" />

</div>
```
Html Snippet:

```html
<a href="https://www.w3schools.com" class="dg_icon-link dg_icon-link--large dg_icon-link--circle" aria-label="Visit our users dashboard to learn more.">
	<i aria-hidden="true" class="dg_icon fa fa-bullhorn"></i>
	<span>PUBLIC NOTICES</span>
</a>
```
