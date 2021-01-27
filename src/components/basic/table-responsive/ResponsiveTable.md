### Responsive Table

**Note**: At this time, an external script reference is required in order to use responsive table.

**Requirements**: In order for the javascript to add the responsive classes the table must have a css class of responsive-main-table

**Optional**: If there is an empty header column to hold things like icons then add the class no-sort to the header cell. This will disable the arrow sort icons. The order-by css class needs to be added to the column that will be pre-sorted.

```jsx
import Table from "../table/Table";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import TableHead from "../table/TableHead";
import TableHeadCell from "../table/TableHeadCell";
import TableRow from "../table/TableRow";

<Table className="responsive-main-table">
  <TableHead>
    <TableRow>
      <TableHeadCell className="no-sort"></TableHeadCell>
      <TableHeadCell className="order-by">Name</TableHeadCell>
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
          className="fa fa-times fa-2x icon-small icon-inline icon-closed"
          aria-hidden="true"
        ></i>
      </TableCell>
      <TableCell>Stumpy McGhee</TableCell>
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
      <TableCell>Paris</TableCell>
      <TableCell>58</TableCell>
      <TableCell>2010/07/25</TableCell>
      <TableCell>$98,750</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <i
          className="fa fa-check fa-2x icon-small icon-inline icon-open"
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
<table class="responsive-main-table">
  <thead>
    <tr>
      <th class="no-sort"></th>
      <th class="order-by">Name</th>
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
          class="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
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
          class="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
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
