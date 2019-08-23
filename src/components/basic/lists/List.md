### Unordered List

```jsx
import ListItem from './ListItem'
;<List>
  	<ListItem>Item One</ListItem>
  	<ListItem>Item Two</ListItem>
  	<ListItem>Item Three</ListItem>
	<ListItem>Item Four
	  <List>
			<ListItem>Sub item One</ListItem>
			<ListItem>Sub item Two</ListItem>
		</List>
	</ListItem>
</List>
```

If you aren't using react, you'll need to use the following html:

```html
<ul class="dg_list">
	<li>Item One</li>
	<li>Item Two</li>
	<li>Item Three</li>
	<li>Item Four
		<ul>
			<li>Sub item One</li>
			<li>Sub item Two</li>
		</ul>
	</li>
</ul>
```

### Ordered List

```jsx
import ListItem from './ListItem'
;<List type="ordered">
  	<ListItem>Item One</ListItem>
  	<ListItem>Item Two</ListItem>
  	<ListItem>Item Three</ListItem>
	<ListItem>Item Four
	  <List type="ordered">
			<ListItem>Sub item One</ListItem>
			<ListItem>Sub item Two</ListItem>
		</List>
	</ListItem>
</List>
```

If you aren't using react, you'll need to use the following html:

```html
<ol class="dg_list">
	<li>Item One</li>
	<li>Item Two</li>
	<li>Item Three</li>
	<li>Item Four
		<ul>
			<li>Sub item One</li>
			<li>Sub item Two</li>
		</ul>
	</li>
</ol>
```