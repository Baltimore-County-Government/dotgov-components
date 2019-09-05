import React from "react";
import ReactDOM from "react-dom";
import LogoType from "./LogoType";

describe(() => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LogoType />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});