import React from "react";
import ReactDOM from "react-dom";
import SiteNavigation from "./SiteNavigation";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SiteNavigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
