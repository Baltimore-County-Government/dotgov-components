import React from "react";
import ReactDOM from "react-dom";
import IconButton from "./IconButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <IconButton
      icon="fas fa-star"
      description="Show a list of your favorite items."
      text="My Button Text"
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
