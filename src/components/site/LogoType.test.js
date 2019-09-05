import React from "react";
import ReactDOM from "react-dom";
import SiteHeader from "./LogoType";

describe("Text Input", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LogoType />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});