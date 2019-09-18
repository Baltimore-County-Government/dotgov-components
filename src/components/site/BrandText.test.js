import React from "react";
import ReactDOM from "react-dom";
import LogoType from "./LogoType";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LogoType header="Baltimore" description="County" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
