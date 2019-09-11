import React from "react";
import ReactDOM from "react-dom";
import EmphasizedImage from "./EmphasizedImage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <EmphasizedImage
      backgroundimage={{
        backgroundImage:
          "url(//dev.baltimorecountymd.gov/sebin/t/s/homepage-county-executive.jpg)"
      }}
    />,
    (imageheader = "County Executive"),
    (imagelink = "Johnny Olszewski")
  );
  ReactDOM.unmountComponentAtNode(div);
});
