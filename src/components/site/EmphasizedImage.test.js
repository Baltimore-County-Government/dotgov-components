import React from "react";
import ReactDOM from "react-dom";
import EmphasizedImage from "./EmphasizedImage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <EmphasizedImage
      imageSrc="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
      imageHeader="County Executive"
      imageSubHeader="Johnny Olszewski"
      imageLink="https://www.w3schools.com"
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
