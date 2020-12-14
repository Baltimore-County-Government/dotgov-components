### Responsive Table

```jsx
import Table from "../table/Table";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import TableHead from "../table/TableHead";
import TableHeadCell from "../table/TableHeadCell";
import TableRow from "../table/TableRow";

<Table id="responsive-main-table" className="display">
  <TableHead>
    <TableRow>
      <TableHeadCell>Icon</TableHeadCell>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Position</TableHeadCell>
      <TableHeadCell>Office</TableHeadCell>
      <TableHeadCell>Age</TableHeadCell>
      <TableHeadCell>Start date</TableHeadCell>
      <TableHeadCell>Salary</TableHeadCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>
        <i
          className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
          aria-hidden="true"
        ></i>
      </TableCell>
      <TableCell>Tiger Nixon</TableCell>
      <TableCell>
        <p>
          <a
            href="http://www.baltimorecountymd.gov/Agencies/recreation/programdivision/weather.html"
            title="Get the latest closing information."
          >
            Recreation Centers
          </a>
        </p>
      </TableCell>
      <TableCell>Edinburgh</TableCell>
      <TableCell>61</TableCell>
      <TableCell>2011/04/25</TableCell>
      <TableCell>$320,800</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <i
          className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
          aria-hidden="true"
        ></i>
      </TableCell>
      <TableCell>Garrett Winters</TableCell>
      <TableCell>
        <p>
          <a
            href="http://www.baltimorecountymd.gov/Agencies/recreation/programdivision/weather.html"
            title="Get the latest closing information."
          >
            Recreation Centers
          </a>
        </p>
      </TableCell>
      <TableCell>Tokyo</TableCell>
      <TableCell>63</TableCell>
      <TableCell>2011/07/25</TableCell>
      <TableCell>$170,750</TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

```html
<table id="responsive-main-table" className="display">
  <thead>
    <tr>
      <th>Icon</th>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <i
          className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
          aria-hidden="true"
        ></i>
      </td>
      <td>Tiger Nixon</td>
      <td>
        <p>
          <a
            href="http://www.baltimorecountymd.gov/Agencies/recreation/programdivision/weather.html"
            title="Get the latest closing information."
            >Recreation Centers</a
          >
        </p>
      </td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
    </tr>
    <tr>
      <td>
        <i
          className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
          aria-hidden="true"
        ></i>
      </td>
      <td>Garrett Winters</td>
      <td>
        <p>
          <a
            href="http://www.baltimorecountymd.gov/Agencies/recreation/programdivision/weather.html"
            title="Get the latest closing information."
            >Recreation Centers</a
          >
        </p>
      </td>
      <td>Tokyo</td>
      <td>63</td>
      <td>2011/07/25</td>
      <td>$170,750</td>
    </tr>
  </tbody>
</table>
```
