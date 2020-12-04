### Responsive Table

```jsx
import Table from "../Table";
import TableBody from "../TableBody";
import TableCell from "../TableCell";
import TableHead from "../TableHead";
import TableHeadCell from "../TableHeadCell";
import TableRow from "../TableRow";
<div id="county-closings_wrapper" className="dataTables_wrapper no-footer">
  <Table
    id="responsive-table"
    className="dataTable no-footer dtr-inline"
    role="grid"
  >
    <TableHead>
      <TableRow role="row">
        <TableHeadCell
          className="not-mobile sorting_disabled"
          rowspan="1"
          colspan="1"
          aria-label=""
        ></TableHeadCell>
        <TableHeadCell
          className="all sorting_asc"
          tabindex="0"
          aria-controls="responsive-table"
          rowspan="1"
          colspan="1"
          aria-sort="ascending"
          aria-label="Status: activate to sort column descending"
        >
          Status
        </TableHeadCell>
        <TableHeadCell
          className="all sorting"
          tabindex="0"
          aria-controls="responsive-table"
          rowspan="1"
          colspan="1"
          aria-label="Agency/Program: activate to sort column ascending"
        >
          Agency/Program
        </TableHeadCell>
        <TableHeadCell
          className="not-mobile sorting_disabled"
          rowspan="1"
          colspan="1"
          aria-label="Information"
        >
          Information
        </TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow role="row" className="odd closed">
        <TableCell>
          <i
            className="fa fa-times fa-2x icon-small icon-inline icon-closed"
            aria-hidden="true"
          ></i>
        </TableCell>
        <TableCell className="sorting_1">Closed</TableCell>
        <TableCell>
          <a
            title="Get the latest closing information."
            href="https://dev.baltimorecountymd.gov/departments/aging/weather.html"
          >
            Senior Centers
          </a>
        </TableCell>
        <TableCell>
          <span>
            Out of an abundance of caution, activities at Baltimore County
            Senior Centers will be suspended. Based on state guidance, all
            Baltimore County senior centers will be closed to the public
            beginning on Monday, March 16, until further notice. County
            officials encourage individuals to coordinate with senior center
            staff to ensure they are prepared for the closure, and we encourage
            those individuals to call the Maryland Access Point hotline at
            410-887-2594.
          </span>
        </TableCell>
      </TableRow>
      <TableRow role="row" className="even modified">
        <TableCell>
          <i
            className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
            aria-hidden="true"
          ></i>
        </TableCell>
        <TableCell className="sorting_1">Modified</TableCell>
        <TableCell>
          <a
            title="Get the latest closing information."
            href="https://dev.baltimorecountymd.gov/departments/aging/weather.html"
          >
            County Ride
          </a>
        </TableCell>
        <TableCell>
          <span className="Normal">CountyRide&nbsp;is</span>
          <span>
            limited to medical appointments, grocery shopping and pharmacy.
          </span>
        </TableCell>
      </TableRow>
      <TableRow role="row" className="odd modified&amp;nbsp;">
        <TableCell>
          <i
            className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
            aria-hidden="true"
          ></i>
        </TableCell>
        <TableCell className="sorting_1">Modified&nbsp;</TableCell>
        <TableCell>
          <a
            title="Get the latest closing information."
            href="http://www.baltimorecountymd.gov/Agencies/recreation/programdivision/weather.html"
          >
            Recreation Centers
          </a>
        </TableCell>
        <TableCell>
          <span>
            To assist in keeping staff, volunteers, participants and residents
            safe and minimize the spread of the COVID-19 virus, the Department
            of Recreation and Parks will be following all State Executive Orders
            related to youth sports activities. All Department of Recreation and
            Parks
          </span>
        </TableCell>
      </TableRow>
      <TableRow role="row" className="even modified&amp;nbsp;">
        <TableCell>
          <i
            className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
            aria-hidden="true"
          ></i>
        </TableCell>
        <TableCell className="sorting_1">Modified&nbsp;</TableCell>
        <TableCell>
          <a
            title="Get the latest closing information."
            href="https://www.baltimorecountymd.gov/Agencies/circuit/weather.html"
          >
            Circuit Court
          </a>
        </TableCell>
        <TableCell>
          Baltimore County Circuit Court—
          <a href="https://dev.baltimorecountymd.gov/departments/circuit/index.html">
            COVID-19 Status Update
          </a>
        </TableCell>
      </TableRow>
      <TableRow role="row" className="odd open">
        <TableCell>
          <i
            className="fa fa-check fa-2x icon-small icon-inline icon-open"
            aria-hidden="true"
          ></i>
        </TableCell>
        <TableCell className="sorting_1">Open</TableCell>
        <TableCell>
          <a
            title="Get the latest closing information."
            href="https://dev.baltimorecountymd.gov/departments/publicworks/solid_waste/snow.html"
          >
            Trash and Recycling Drop-Off Centers
          </a>
        </TableCell>
        <TableCell>
          All three drop-off centers are currently in service with normal
          operating hours (including the usual
          <a
            title="View the County's holiday schedule."
            href="https://dev.baltimorecountymd.gov/News/holidays/index.html"
          >
            holiday schedule
          </a>). However, visitors and employees are now required to wear masks onsite
          and adhere to all social distancing guidelines. These requirements will
          be strictly enforced. Driver's licenses will still be scanned to confirm
          residency.
        </TableCell>
      </TableRow>
      <TableRow role="row" className="even open">
        <TableCell>
          <i
            className="fa fa-check fa-2x icon-small icon-inline icon-open"
            aria-hidden="true"
          ></i>
        </TableCell>
        <TableCell className="sorting_1">Open</TableCell>
        <TableCell>
          <a
            title="Get the latest closing information."
            href="https://dev.baltimorecountymd.gov/departments/animalservices/"
          >
            Animal Services
          </a>
        </TableCell>
        <TableCell>
          &nbsp;
          <span>
            All Baltimore&nbsp;County Animal Services facilities are open and
            operating normally.
          </span>
        </TableCell>
      </TableRow>
      <TableRow role="row" className="odd operating">
        <TableCell>
          <i
            className="fa fa-check fa-2x icon-small icon-inline icon-operating"
            aria-hidden="true"
          ></i>
        </TableCell>
        <TableCell className="sorting_1">Operating</TableCell>
        <TableCell>
          <a
            title="Get the latest closing information."
            href="https://dev.baltimorecountymd.gov/departments/publicworks/solid_waste/snow.html"
          >
            Trash and Recycling Collection
          </a>
        </TableCell>
        <TableCell>
          Trash, recycling and yard material collections are running normally;
          please follow your regularly-scheduled collection days for all
          materials (including the usual
          <a
            title="View the County's holiday schedule."
            href="https://dev.baltimorecountymd.gov/News/holidays/index.html"
          >
            holiday schedule
          </a>). However, there are still high volumes of material being collected,
          and collectors may not be able to take all bags of yard material on a single
          collection day. If this happens, please leave your yard material out until
          collection occurs.
        </TableCell>
      </TableRow>
      <TableRow role="row" className="even see-website">
        <TableCell>
          <i
            className="fa fa-external-link fa-2x icon-small icon-inline icon-seewebsite"
            aria-hidden="true"
          ></i>
        </TableCell>
        <TableCell className="sorting_1">See Website</TableCell>
        <TableCell>
          <a
            title="Get the latest library closing information."
            href="http://www.bcpl.info"
          >
            Public Library
          </a>
        </TableCell>
        <TableCell>
          Visit the Baltimore County Public Library website for all branch
          closing information.
        </TableCell>
      </TableRow>
      <TableRow role="row" className="odd see-website">
        <TableCell>
          <i
            className="fa fa-external-link fa-2x icon-small icon-inline icon-seewebsite"
            aria-hidden="true"
          ></i>
        </TableCell>
        <TableCell className="sorting_1">See Website</TableCell>
        <TableCell>
          <a
            title="Get the latest school closing information."
            href="http://www.bcps.org"
          >
            Public Schools
          </a>
        </TableCell>
        <TableCell>
          Visit the Baltimore County Public Schools website for all school
          closing information.
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>;
```

```html
<div id="county-closings_wrapper" className="dataTables_wrapper no-footer">
  <table
    id="responsive-table"
    className="table dataTable no-footer dtr-inline"
    cellspacing="0"
    width="100%"
    style="display: table;"
    role="grid"
  >
    <thead>
      <tr role="row">
        <th
          className="not-mobile sorting_disabled"
          rowspan="1"
          colspan="1"
          aria-label=""
        ></th>
        <th
          className="all sorting_asc"
          tabindex="0"
          aria-controls="responsive-table"
          rowspan="1"
          colspan="1"
          aria-sort="ascending"
          aria-label="Status: activate to sort column descending"
        >
          Status
        </th>
        <th
          className="all sorting"
          tabindex="0"
          aria-controls="responsive-table"
          rowspan="1"
          colspan="1"
          aria-label="Agency/Program: activate to sort column ascending"
        >
          Agency/Program
        </th>
        <th
          className="not-mobile sorting_disabled"
          rowspan="1"
          colspan="1"
          aria-label="Information"
        >
          Information
        </th>
      </tr>
    </thead>
    <tbody>
      <tr role="row" className="odd closed">
        <td>
          <i
            className="fa fa-times fa-2x icon-small icon-inline icon-closed"
            aria-hidden="true"
          ></i>
        </td>
        <td className="sorting_1">Closed</td>
        <td>
          <a
            title="Get the latest closing information."
            href="https://dev.baltimorecountymd.gov/departments/aging/weather.html"
            >Senior Centers</a
          >
        </td>
        <td>
          <span
            >Out of an abundance of caution, activities at Baltimore County
            Senior Centers will be suspended. Based on state guidance, all
            Baltimore County senior centers will be closed to the public
            beginning on Monday, March 16, until further notice. County
            officials encourage individuals to coordinate with senior center
            staff to ensure they are prepared for the closure, and we encourage
            those individuals to call the Maryland Access Point hotline at
            410-887-2594.</span
          >
        </td>
      </tr>
      <tr role="row" className="even modified">
        <td>
          <i
            className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
            aria-hidden="true"
          ></i>
        </td>
        <td className="sorting_1">Modified</td>
        <td>
          <a
            title="Get the latest closing information."
            href="https://dev.baltimorecountymd.gov/departments/aging/weather.html"
            >County Ride</a
          >
        </td>
        <td>
          <span className="Normal">CountyRide&nbsp;is</span>
          <span
            >limited to medical appointments, grocery shopping and
            pharmacy.</span
          >
        </td>
      </tr>
      <tr role="row" className="odd modified&amp;nbsp;">
        <td>
          <i
            className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
            aria-hidden="true"
          ></i>
        </td>
        <td className="sorting_1">Modified&nbsp;</td>
        <td>
          <a
            title="Get the latest closing information."
            href="http://www.baltimorecountymd.gov/Agencies/recreation/programdivision/weather.html"
            >Recreation Centers</a
          >
        </td>
        <td>
          <span
            >To assist in keeping staff, volunteers, participants and residents
            safe and minimize the spread of the COVID-19 virus, the Department
            of Recreation and Parks will be following all State Executive Orders
            related to youth sports activities. All Department of Recreation and
            Parks
            <span>buildings are closed to the public until further notice</span
            >.</span
          >&nbsp;Open to the Public
          <ul>
            <li>Basketball courts</li>
            <li>
              Beaches
              <ul>
                <li>
                  <em>Note:&nbsp;</em
                  ><em
                    >Park capacity is still limited. Groups should be 10 or
                    less, and everyone should practice social distancing. Masks
                    are required for bathroom use with limited occupancy.
                    Showers are still closed at this time.&nbsp;</em
                  >
                </li>
              </ul>
            </li>
            <li>Boating</li>
            <li><span style="font-size: 0.96em;">Comfort stations</span></li>
            <li>
              Community gardens
              <ul>
                <li>
                  <em
                    >Note:&nbsp;Some community gardens may not have water or be
                    prepped at this time.</em
                  >
                </li>
              </ul>
            </li>
            <li><span style="font-size: 0.96em;">County parks</span></li>
            <li><span style="font-size: 0.96em;">Disc golf courses</span></li>
            <li><span style="font-size: 0.96em;">Dog Parks</span></li>
            <li><span style="font-size: 0.96em;">Fields and diamonds</span></li>
            <li><span style="font-size: 0.96em;">Golf courses</span></li>
            <li><span style="font-size: 0.96em;">Horseshoe pits</span></li>
            <li>Open space</li>
            <li><span style="font-size: 0.96em;">Pavilions</span></li>
            <li>Picnic areas</li>
            <li>Playgrounds</li>
            <li><span style="font-size: 0.96em;">Pickleball courts</span></li>
            <li>
              <span style="font-size: 0.96em;">Recreational fishing</span>
            </li>
            <li>
              <span style="font-size: 0.96em;">Restrooms&nbsp;</span>
              <ul>
                <li>
                  <span style="font-size: 0.96em;"
                    ><em>Note:&nbsp;</em
                    ><em
                      >Outdoor accessible restroom facilities will be opened in
                      conjunction with scheduled permitted activities and as
                      regular need demands.</em
                    ></span
                  ><span style="font-size: 0.96em;">&nbsp;</span>
                </li>
              </ul>
            </li>
            <li>
              <span style="font-size: 0.96em;">Skate Parks</span>
              <ul>
                <li>
                  <em
                    >Note:&nbsp;<span style="font-size: 0.96em;"
                      >In an effort to keep our members safe, we ask that
                      skaters&nbsp;wear masks,</span
                    >&nbsp;practice social distancing
                    <span style="font-size: 0.96em;"
                      >and that there are less than&nbsp;10 skaters at a
                      time&nbsp;in the park.</span
                    ></em
                  >
                </li>
              </ul>
            </li>
            <li>Tennis courts <em>(indoor and outdoor)</em></li>
            <li><span style="font-size: 0.96em;">Trails</span></li>
            <li><span style="font-size: 0.96em;">Turf fields</span></li>
          </ul>
          <h4><span style="font-size: 0.96em;">Closed to the Public</span></h4>
          <ul>
            <li><span style="font-size: 0.96em;">Buildings</span></li>
            <li><span style="font-size: 0.96em;">Portable toilets</span></li>
            <li><span style="font-size: 0.96em;">Stages</span></li>
            <li><span style="font-size: 0.96em;">Water fountains</span></li>
          </ul>
          <span style="font-size: 0.96em;"
            ><span style="font-size: 0.96em;"
              >The Baltimore County Department of Recreation and Parks, with
              support from the&nbsp;Maryland Food Bank and Healthy Food Access
              St. Vincent de Paul of Baltimore,</span
            >
            is offering limited food distribution for families<span
              style="font-size: 0.96em;"
              >. Find more information.&nbsp;</span
            ></span
          >
        </td>
      </tr>
      <tr role="row" className="even modified&amp;nbsp;">
        <td>
          <i
            className="fa fa-exclamation-triangle fa-2x icon-small icon-inline icon-modified"
            aria-hidden="true"
          ></i>
        </td>
        <td className="sorting_1">Modified&nbsp;</td>
        <td>
          <a
            title="Get the latest closing information."
            href="https://www.baltimorecountymd.gov/Agencies/circuit/weather.html"
            >Circuit Court</a
          >
        </td>
        <td>
          Baltimore County Circuit Court—<a
            href="https://dev.baltimorecountymd.gov/departments/circuit/index.html"
            >COVID-19 Status Update</a
          >
        </td>
      </tr>
      <tr role="row" className="odd open">
        <td>
          <i
            className="fa fa-check fa-2x icon-small icon-inline icon-open"
            aria-hidden="true"
          ></i>
        </td>
        <td className="sorting_1">Open</td>
        <td>
          <a
            title="Get the latest closing information."
            href="https://dev.baltimorecountymd.gov/departments/publicworks/solid_waste/snow.html"
            >Trash and Recycling Drop-Off Centers</a
          >
        </td>
        <td>
          All three drop-off centers are currently in service with normal
          operating hours (including the usual
          <a
            title="View the County's holiday schedule."
            href="https://dev.baltimorecountymd.gov/News/holidays/index.html"
            >holiday schedule</a
          >). However, visitors and employees are now required to wear masks
          onsite and adhere to all social distancing guidelines. These
          requirements will be strictly enforced. Driver's licenses will still
          be scanned to confirm residency.
        </td>
      </tr>
      <tr role="row" className="even open">
        <td>
          <i
            className="fa fa-check fa-2x icon-small icon-inline icon-open"
            aria-hidden="true"
          ></i>
        </td>
        <td className="sorting_1">Open</td>
        <td>
          <a
            title="Get the latest closing information."
            href="https://dev.baltimorecountymd.gov/departments/animalservices/"
            >Animal Services</a
          >
        </td>
        <td>
          &nbsp;<span
            >All Baltimore&nbsp;County Animal Services facilities are open and
            operating normally.</span
          >
        </td>
      </tr>
      <tr role="row" className="odd operating">
        <td>
          <i
            className="fa fa-check fa-2x icon-small icon-inline icon-operating"
            aria-hidden="true"
          ></i>
        </td>
        <td className="sorting_1">Operating</td>
        <td>
          <a
            title="Get the latest closing information."
            href="https://dev.baltimorecountymd.gov/departments/publicworks/solid_waste/snow.html"
            >Trash and Recycling Collection</a
          >
        </td>
        <td>
          Trash, recycling and yard material collections are running normally;
          please follow your regularly-scheduled collection days for all
          materials (including the usual
          <a
            title="View the County's holiday schedule."
            href="https://dev.baltimorecountymd.gov/News/holidays/index.html"
            >holiday schedule</a
          >). However, there are still high volumes of material being collected,
          and collectors may not be able to take all bags of yard material on a
          single collection day. If this happens, please leave your yard
          material out until collection occurs.
        </td>
      </tr>
      <tr role="row" className="even see-website">
        <td>
          <i
            className="fa fa-external-link fa-2x icon-small icon-inline icon-seewebsite"
            aria-hidden="true"
          ></i>
        </td>
        <td className="sorting_1">See Website</td>
        <td>
          <a
            title="Get the latest library closing information."
            href="http://www.bcpl.info"
            >Public Library</a
          >
        </td>
        <td>
          Visit the Baltimore County Public Library website for all branch
          closing information.
        </td>
      </tr>
      <tr role="row" className="odd see-website">
        <td>
          <i
            className="fa fa-external-link fa-2x icon-small icon-inline icon-seewebsite"
            aria-hidden="true"
          ></i>
        </td>
        <td className="sorting_1">See Website</td>
        <td>
          <a
            title="Get the latest school closing information."
            href="http://www.bcps.org"
            >Public Schools</a
          >
        </td>
        <td>
          Visit the Baltimore County Public Schools website for all school
          closing information.
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
