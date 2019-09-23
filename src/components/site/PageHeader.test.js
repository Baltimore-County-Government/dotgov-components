import React from "react";
import ReactDOM from "react-dom";
import PageHeader from "./PageHeader";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <PageHeader
      preTitle="department of "
      title="public works"
      deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
