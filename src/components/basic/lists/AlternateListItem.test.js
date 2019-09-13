import React from "react";
import ReactDOM from "react-dom";
import AlternateList from "./AlternateList";
import AlternateListItem from "./AlternateListItem";

it("renders an `ul` without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AlternateList>
      <AlternateListItem linkText="Item 1" link="#" title="Item 1" />
    </AlternateList>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders an `ol` without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AlternateList type="ordered">
      <AlternateListItem linkText="Item 1" link="#" title="Item 1" />
    </AlternateList>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
