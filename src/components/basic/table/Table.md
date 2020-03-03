Responsive utility with table elements will be achieved with the class "table-responsive". "table-responsive" will be applied to a div element, wrapping the table. The class "table-fixed" is another utility that may be used with tables within card elements. "table-fixed" will be applied directly to the table element.

```html
<!-- This is an example of how to use table-responsive-->
<div class="table-responsive">
  <table class="table"></table>
</div>

<!-- This is an example of thow to use table-fixed -->
<table class="table table-fixed"></table>
```

## Examples

### Basic

```jsx
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";
<Table>
  <TableHead>
    <TableRow>
      <TableHeadCell>Breakfast</TableHeadCell>
      <TableHeadCell>Lunch</TableHeadCell>
      <TableHeadCell>Dinner</TableHeadCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Breakfast Pizza™</TableCell>
      <TableCell>Lemon Salad</TableCell>
      <TableCell>Steamed Hams</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Gummy Worms</TableCell>
      <TableCell>Lunch Pizza™</TableCell>
      <TableCell>An Entire Can of Beans</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Leftover Toast</TableCell>
      <TableCell>Grilled Cheese</TableCell>
      <TableCell>Dinner Pizza™</TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

Html Snippet:

```html
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Breakfast</th>
        <th>Lunch</th>
        <th>Dinner</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Breakfast Pizza™</td>
        <td>Lemon Salad</td>
        <td>Steamed Hams</td>
      </tr>
      <tr>
        <td>Gummy Worms</td>
        <td>Lunch Pizza™</td>
        <td>An Entire Can of Beans</td>
      </tr>
      <tr>
        <td>Leftover Toast</td>
        <td>Grilled Cheese</td>
        <td>Dinner Pizza™</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Table Dark

```jsx
import Section from "../containers/Section";
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";
<Section className="dark">
  <div style={{ padding: "15px" }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Breakfast</TableHeadCell>
          <TableHeadCell>Lunch</TableHeadCell>
          <TableHeadCell>Dinner</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Breakfast Pizza™</TableCell>
          <TableCell>Lemon Salad</TableCell>
          <TableCell>Steamed Hams</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gummy Worms</TableCell>
          <TableCell>Lunch Pizza™</TableCell>
          <TableCell>An Entire Can of Beans</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Leftover Toast</TableCell>
          <TableCell>Grilled Cheese</TableCell>
          <TableCell>Dinner Pizza™</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</Section>;
```

Html Snippet:

```html
<div class="dg_section dark">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Dinner</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Breakfast Pizza™</td>
          <td>Lemon Salad</td>
          <td>Steamed Hams</td>
        </tr>
        <tr>
          <td>Gummy Worms</td>
          <td>Lunch Pizza™</td>
          <td>An Entire Can of Beans</td>
        </tr>
        <tr>
          <td>Leftover Toast</td>
          <td>Grilled Cheese</td>
          <td>Dinner Pizza™</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

### Vertical Table Headings

```jsx
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";
<Table>
  <TableBody>
    <TableRow>
      <TableHeadCell>Breakfast</TableHeadCell>
      <TableCell>Breakfast Pizza™</TableCell>
    </TableRow>
    <TableRow>
      <TableHeadCell>Lunch</TableHeadCell>
      <TableCell>Gummy Worms</TableCell>
    </TableRow>
    <TableRow>
      <TableHeadCell>Dinner</TableHeadCell>
      <TableCell>Dinner Pizza™</TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

Html Snippet:

```html
<div class="table-responsive">
  <table class="table">
    <tbody>
      <tr>
        <th>Breakfast</th>
        <td>Breakfast Pizza™</td>
      </tr>
      <tr>
        <th>Lunch</th>
        <td>Gummy Worms</td>
      </tr>
      <tr>
        <th>Dinner</th>
        <td>Dinner Pizza™</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Vertical Table Headings in a Dark Section

```jsx
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";
import Section from "../containers/Section";
<Section className="dark">
  <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
    <Table>
      <TableBody>
        <TableRow>
          <TableHeadCell>Breakfast</TableHeadCell>
          <TableCell>Breakfast Pizza™</TableCell>
        </TableRow>
        <TableRow>
          <TableHeadCell>Lunch</TableHeadCell>
          <TableCell>Gummy Worms</TableCell>
        </TableRow>
        <TableRow>
          <TableHeadCell>Dinner</TableHeadCell>
          <TableCell>Dinner Pizza™</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</Section>;
```

Html Snippet:

```html
<div class="table-responsive">
  <table class="table">
    <tbody>
      <tr>
        <th>Breakfast</th>
        <td>Breakfast Pizza™</td>
      </tr>
      <tr>
        <th>Lunch</th>
        <td>Gummy Worms</td>
      </tr>
      <tr>
        <th>Dinner</th>
        <td>Dinner Pizza™</td>
      </tr>
    </tbody>
  </table>
</div>
```
