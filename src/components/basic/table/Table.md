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
<div>
  <table class="table">
    <tbody>
      <tr>
        <th>Finisher</th>
        <td>Parmesan</td>
        <td>Ranch</td>
      </tr>
      <tr>
        <th>Sauce</th>
        <td>Marinara</td>
        <td>Red</td>
      </tr>
      <tr>
        <th>Topping</th>
        <td>Lemon</td>
        <td>Pepperoni</td>
      </tr>
      <tr>
        <th>Crust</th>
        <td>Thin</td>
        <td>Deep Dish</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Table Dark

If you aren't using react, you'll need to use the following html:

```html
<div class="dg_section dark">
  <table class="table">
    <tbody>
      <tr>
        <th>Finisher</th>
        <td>Parmesan</td>
        <td>Ranch</td>
      </tr>
      <tr>
        <th>Sauce</th>
        <td>Marinara</td>
        <td>Red</td>
      </tr>
      <tr>
        <th>Topping</th>
        <td>Lemon</td>
        <td>Pepperoni</td>
      </tr>
      <tr>
        <th>Crust</th>
        <td>Thin</td>
        <td>Deep Dish</td>
      </tr>
    </tbody>
  </table>
</div>
```
