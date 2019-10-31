import React from "react";
import ReactDOM from "react-dom";
import Collapse from "./Collapse";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Collapse id="test" header="Test Header" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
