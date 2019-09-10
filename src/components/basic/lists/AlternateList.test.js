import React from "react";
import ReactDOM from "react-dom";
import AlternateList from "./AlternateList";
import ListItem from "./ListItem";

it("renders an `ul` without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AlternateList>
      <ListItem>Item 1</ListItem>
    </AlternateList>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders an `ol` without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AlternateList type="ordered">
      <ListItem>Item 1</ListItem>
    </AlternateList>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
