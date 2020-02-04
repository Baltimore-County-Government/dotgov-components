import React from "react";
import ReactDOM from "react-dom";
import ScrollableContainer from "./ScrollableContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ScrollableContainer>
      <p>Some content goes here</p>
    </ScrollableContainer>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
