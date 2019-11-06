import React from "react";
import ReactDOM from "react-dom";
import SiteNavButton from "./SiteNavButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SiteNavButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
