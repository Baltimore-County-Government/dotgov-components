```jsx
const publicWorksSummaryItems = [
  {
    id: 1,
    icon: "fas fa-map-marker-alt",
    heading: "Main Office",
    content:
      "<p> 111 West Chesapeake Avenue<br /> Suite 307<br /> Towson, Maryland 21204</p>"
  },

  {
    id: 2,
    icon: "far fa-clock",
    heading: "Hours:",
    content: "<p>Monday through Friday<br />8 a.m. to 4:30 p.m.</p>"
  },
  {
    id: 3,
    icon: "far fa-envelope",
    heading: "Email:",
    content: "<p><a href=`#`>publicworks@​baltimorecountymd.gov</a></p>"
  },
  {
    id: 4,
    icon: "fas fa-mobile-alt",
    heading: "Phone:",
    content:
      "<p><a href=`tel:410-887-6789`>410-887-6789</a></p><p><h3>Emergency Dispatch:</h3></p><p><a href=`tel:410-887-6789`>410-887-6789</a></p>"
  },
  {
    id: 5,
    icon: "fas fa-exclamation-circle",
    heading: "BALTCOGO311",
    content: " <p><a href=`#`>Report a problem</a> online.</p>"
  },
  {
    id: 6,
    icon: "fas fa-user",
    heading: "Director:",
    content: "<p>Steve Walsh, P.E.</p>"
  }
];
<SummaryList items={publicWorksSummaryItems} />;
```

Html Snippet:

```html
<div class="dg_summary-list">
  <div class="dg_summary-list__item">
    <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
    <div>
      <h3>Main Office</h3>
      <div>
        <p>
          111 West Chesapeake Avenue<br />
          Suite 307<br />
          Towson, Maryland 21204
        </p>
      </div>
    </div>
  </div>
  <div class="dg_summary-list__item">
    <i class="far fa-clock" aria-hidden="true"></i>
    <div>
      <h3>Hours:</h3>
      <div>
        <p>Monday through Friday<br />8 a.m. to 4:30 p.m.</p>
      </div>
    </div>
  </div>
  <div class="dg_summary-list__item">
    <i class="far fa-envelope" aria-hidden="true"></i>
    <div>
      <h3>Email:</h3>
      <div>
        <p><a href="`#`">publicworks@​baltimorecountymd.gov</a></p>
      </div>
    </div>
  </div>
  <div class="dg_summary-list__item">
    <i class="fas fa-mobile-alt" aria-hidden="true"></i>
    <div>
      <h3>Phone:</h3>
      <div>
        <p><a href="`tel:410-887-6789`">410-887-6789</a></p>
        <p></p>
        <h3>Emergency Dispatch:</h3>
        <p></p>
        <p><a href="`tel:410-887-6789`">410-887-6789</a></p>
      </div>
    </div>
  </div>
  <div class="dg_summary-list__item">
    <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    <div>
      <h3>BALTCOGO311</h3>
      <div>
        <p><a href="`#`">Report a problem</a> online.</p>
      </div>
    </div>
  </div>
  <div class="dg_summary-list__item">
    <i class="fas fa-user" aria-hidden="true"></i>
    <div>
      <h3>Director:</h3>
      <div>
        <p>Steve Walsh, P.E.</p>
      </div>
    </div>
  </div>
</div>
```
