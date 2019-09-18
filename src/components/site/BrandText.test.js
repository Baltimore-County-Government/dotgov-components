import React from "react";
import ReactDOM from "react-dom";
import BrandText from "./BrandText";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrandText header="Baltimore" description="County" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
