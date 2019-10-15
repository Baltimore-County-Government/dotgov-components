```jsx
const collapseItems = [
  {
    id: 1,
    header: "Accordion Item #1",
    subheader: "This is a subheader",
    text: "Text goes here"
  },
  {
    id: 2,
    header: "Accordion Item #2",
    subheader: "",
    text: "Text goes here"
  },
  {
    id: 3,
    header: "Accordion Item #3",
    subheader: "",
    text: (
      <img
        width="300"
        height="200"
        alt="Stuff goes here"
        src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
        border="0"
        vspace="0"
        hspace="0"
      />
    )
  },
  {
    id: 4,
    header: "Accordion Item #4",
    subheader: "",
    text: <a href="https://www.w3schools.com">This is a link </a>
  }
];

<Accordion
  className="dg_section"
  collapseItems={collapseItems}
  toggleMultiOpen={true}
/>;
```

### Accordion Dark

```jsx
const collapseItems = [
  {
    id: 11,
    header: "Accordion Item #1",
    subheader: "This is a subheader",
    text: "Text goes here"
  },
  {
    id: 12,
    header: "Accordion Item #2",
    subheader: "",
    text: "Text goes here"
  },
  {
    id: 13,
    header: "Accordion Item #3",
    subheader: "",
    text: (
      <img
        width="300"
        height="200"
        alt="Stuff goes here"
        src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
        border="0"
        vspace="0"
        hspace="0"
      />
    )
  },
  {
    id: 14,
    header: "Accordion Item #4",
    subheader: "",
    text: <a href="https://www.w3schools.com">This is a link </a>
  }
];

<Accordion className="dg_section dark" collapseItems={collapseItems} />;
```

Html Snippet:

```html
<!--Remove/Add class dg_allowmutlipleopen to toggle all can be opened together or one at a time open-->
<div class="dg_accordion dg_allowmutlipleopen" id="accordionExample1">
  <button class="dg_allitems dg_button-link" id="menuActionButton1">
    Open All
  </button>
  <div class="collapsed dg_accordion__collapsible">
    <button
      class="dg_accordion-btn"
      type="button"
      data-toggle="collapse"
      data-target="#collapseOne1"
      aria-expanded="true"
      aria-controls="collapseOne"
      style="text-align: left; width:100%;"
    >
      Collapsible Group Item #1
    </button>
    <div
      id="collapseOne1"
      class="multi-collapse collapse"
      data-parent="#accordionExample1"
    >
      <div class="dg_accordion-item-body">
        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
        you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="collapsed dg_accordion__collapsible">
    <button
      class="dg_accordion-btn"
      type="button"
      data-toggle="collapse"
      data-target="#collapseTwo2"
      aria-expanded="false"
      aria-controls="collapseTwo"
      style="text-align: left; width: 100%;"
    >
      Collapsible Group Item #2
    </button>
    <div>
      This is a sub header
    </div>
    <div
      id="collapseTwo2"
      class="multi-collapse collapse"
      data-parent="#accordionExample1"
    >
      <div class="dg_accordion-item-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
      </div>
    </div>
  </div>
  <div class="collapsed dg_accordion__collapsible">
    <button
      class="dg_accordion-btn"
      type="button"
      data-toggle="collapse"
      data-target="#collapseThree3"
      aria-expanded="false"
      aria-controls="collapseThree"
      style="text-align: left; width:100%;"
    >
      Collapsible Group Item #3
    </button>
    <div
      id="collapseThree3"
      class="multi-collapse collapse"
      data-parent="#accordionExample1"
    >
      <div class="dg_accordion-item-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat you
        probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
```
