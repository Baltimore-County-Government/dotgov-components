**Note**: At this time, an external script reference is required in order to use accordions. To use span tag, remove prority from the code

## Examples

### Default Example

```jsx
const collapseItems = [
  {
    id: 1,
    header: "Accordion Item #1",
    subheader: "This is a subheader",
    content: <h3>Test Heading Level 3</h3>,
  },
  {
    id: 2,
    header: "Accordion Item #2",
    subheader: "",
    content: (
      <p>
        Lorem ipsum dolor amet live-edge laborum ullamco hot chicken do,{" "}
        <a href="#">tilde sint dolore anim enamel</a> pin tumeric try-hard yr
        echo park thundercats. Enim next level keffiyeh ramps.
      </p>
    ),
  },
  {
    id: 3,
    header: "Accordion Item #3",
    subHeader: "",
    content: (
      <ul>
        <li>Vexillologist</li>
        <li>Etsy four dollar toast</li>
        <li>
          Gochujang minim pitchfork cliche sriracha distillery taiyaki et hoodie
          copper mug ethical normcore labore ennui
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    header: "Accordion Item #4",
    subheader: "",
    content: (
      <img
        className="dg_image"
        alt="Stuff goes here"
        src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
      />
    ),
  },
  {
    id: 5,
    header: "Accordion Item #5",
    subheader: "",
    content: <h3>90's prism seitan</h3>,
  },
  {
    id: 6,
    header: "Accordion Item #6",
    subheader: "",
    content: (
      <p>
        <strong>Gluten-free, green juice four dollar toast</strong> hashtag
        quinoa occupy tofu chia officia banh mi.
      </p>
    ),
  },
  {
    id: 7,
    header: "Accordion Item #7",
    subheader: "",
    content: <h3>Plaid knausgaard slow-carb</h3>,
  },
  {
    id: 8,
    header: "Accordion Item #8",
    subheader: "",
    content: (
      <p>
        Pour-over sartorial fashion axe, qui normcore biodiesel post-ironic.
        Taxidermy paleo thundercats air plant brunch whatever. Hell of
        vexillologist semiotics, portland hella tattooed beard celiac eu craft
        beer. Gentrify farm-to-table humblebrag anim knausgaard. Sint organic
        voluptate, craft beer.
      </p>
    ),
  },
  {
    id: 9,
    header: "Accordion Item #9",
    subheader: "",
    content: <p>Jean shorts plaid food truck austin leggings fashion axe.</p>,
  },
  {
    id: 10,
    header: "Accordion Item #10",
    subheader: "",
    content: (
      <button type="button" className="dg_button">
        Click Me
      </button>
    ),
  },
];

import Section from "../basic/containers/Section";
<div id="dg_main-content">
  <Section>
    <Accordion collapseItems={collapseItems} priority="4" />
  </Section>
</div>;
```

### Accordion Dark

```jsx
const collapseItems = [
  {
    id: 1,
    header: "Accordion Item #1",
    subheader: "This is a subheader",
    content: <h3>Test Heading Level 3</h3>,
  },
  {
    id: 2,
    header: "Accordion Item #2",
    subheader: "",
    content: (
      <p>
        Lorem ipsum dolor amet live-edge laborum ullamco hot chicken do,{" "}
        <a href="#">tilde sint dolore anim enamel</a> pin tumeric try-hard yr
        echo park thundercats. Enim next level keffiyeh ramps.
      </p>
    ),
  },
  {
    id: 3,
    header: "Accordion Item #3",
    subHeader: "",
    content: (
      <ul>
        <li>Vexillologist</li>
        <li>Etsy four dollar toast</li>
        <li>
          Gochujang minim pitchfork cliche sriracha distillery taiyaki et hoodie
          copper mug ethical normcore labore ennui
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    header: "Accordion Item #4",
    subheader: "",
    content: (
      <img
        className="dg_image"
        alt="Stuff goes here"
        src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
      />
    ),
  },
  {
    id: 5,
    header: "Accordion Item #5",
    subheader: "",
    content: <h3>90's prism seitan</h3>,
  },
  {
    id: 6,
    header: "Accordion Item #6",
    subheader: "",
    content: (
      <p>
        <strong>Gluten-free, green juice four dollar toast</strong> hashtag
        quinoa occupy tofu chia officia banh mi.
      </p>
    ),
  },
  {
    id: 7,
    header: "Accordion Item #7",
    subheader: "",
    content: <h3>Plaid knausgaard slow-carb</h3>,
  },
  {
    id: 8,
    header: "Accordion Item #8",
    subheader: "",
    content: (
      <p>
        Pour-over sartorial fashion axe, qui normcore biodiesel post-ironic.
        Taxidermy paleo thundercats air plant brunch whatever. Hell of
        vexillologist semiotics, portland hella tattooed beard celiac eu craft
        beer. Gentrify farm-to-table humblebrag anim knausgaard. Sint organic
        voluptate, craft beer.
      </p>
    ),
  },
  {
    id: 9,
    header: "Accordion Item #9",
    subheader: "",
    content: <p>Jean shorts plaid food truck austin leggings fashion axe.</p>,
  },
  {
    id: 10,
    header: "Accordion Item #10",
    subheader: "",
    content: (
      <button type="button" className="dg_button">
        Click Me
      </button>
    ),
  },
];

import Section from "../basic/containers/Section";
<div id="dg_main-content">
  <Section className="dark">
    <Accordion collapseItems={collapseItems} />
  </Section>
</div>;
```

Html Snippet:

```html
<div class="dg_accordion" id="accordionExample1">
  <button class="dg_allitems dg_button-link" id="menuActionButton1">
    Open All
  </button>
  <div class="collapsed dg_accordion__collapsible">
    <button
      class="dg_accordion-btn"
      type="button"
      aria-expanded="false"
      aria-controls="collapseOne1"
    >
      <h4 class="dg_accordion_buttontext-holder">Collapsible Group Item #1</h4>
    </button>
    <div id="collapseOne1" class="multi-collapse collapse">
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
      aria-expanded="false"
      aria-controls="collapseTwo2"
    >
      <h4 class="dg_accordion_buttontext-holder">Collapsible Group Item #2</h4>
    </button>
    <div>This is a sub header</div>
    <div id="collapseTwo2" class="multi-collapse collapse">
      <div class="dg_accordion-item-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
      </div>
    </div>
  </div>
  <div class="collapsed dg_accordion__collapsible">
    <button
      class="dg_accordion-btn"
      type="button"
      aria-expanded="false"
      aria-controls="collapseThree3"
    >
      <h4 class="dg_accordion_buttontext-holder">Collapsible Group Item #3</h4>
    </button>
    <div id="collapseThree3" class="multi-collapse collapse">
      <div class="dg_accordion-item-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat you
        probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
```
