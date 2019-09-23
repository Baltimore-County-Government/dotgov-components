import React from "react";
import ReactDOM from "react-dom";
import PageHeader from "./PageHeader";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <PageHeader
      backGroundImage="https://www.baltimorecountymd.gov/sebin/r/t/prototype-subpage-landing-header-bkg.jpg"
      preTitle="department of "
      title="public works"
      deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
