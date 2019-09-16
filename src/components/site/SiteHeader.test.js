import React from "react";
import ReactDOM from "react-dom";
import SiteHeader from "./SiteHeader";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <SiteHeader
      heading="Baltimore County"
      subHeading="Government"
      status="Beta"
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
