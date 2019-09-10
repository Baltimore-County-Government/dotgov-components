import React from "react";
import ReactDOM from "react-dom";
import AlternateList from "./AlternateList";
import AlternateListItem from "./AlternateListItem";

it("renders an `ul` without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AlternateList>
      <AlternateListItem>Item 1</AlternateListItem>
    </AlternateList>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders an `ol` without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AlternateList type="ordered">
      <AlternateListItem>Item 1</AlternateListItem>
    </AlternateList>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
