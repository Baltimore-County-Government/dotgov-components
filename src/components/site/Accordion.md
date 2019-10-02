```jsx
const collpaseItems = [
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

<Accordion collpaseItems={collpaseItems} />;
```
