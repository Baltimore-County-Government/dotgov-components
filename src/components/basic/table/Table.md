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

If you aren't using react, you'll need to use the following html:

```html
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

If you aren't using react, you'll need to use the following html:

```html
<div class="dg_section dark">
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
