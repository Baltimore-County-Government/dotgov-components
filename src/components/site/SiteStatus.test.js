import React from "react";
import ReactDOM from "react-dom";
import SiteStatus from "./SiteStatus";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SiteStatus />, div);
  ReactDOM.unmountComponentAtNode(div);
});