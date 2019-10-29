import React from "react";
import ReactDOM from "react-dom";
import Collapse from "./Collapse";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Collapse />, div);
  ReactDOM.unmountComponentAtNode(div);
});
