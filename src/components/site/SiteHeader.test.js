import React from "react";
import ReactDOM from "react-dom";
import SiteHeader from "./SiteHeader";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SiteHeader status="Beta" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
