import React from "react";
import ReactDOM from "react-dom";
import IconHeading from "./IconHeading";

it("renders default (h2) without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IconHeading text="My Favorites" icon="fas fa-star" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders h1 without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <IconHeading text="My Favorites" level="1" icon="fas fa-star" />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders heading with image without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <IconHeading
      text="My Favorites"
      level="1"
      image="http://staging.baltimorecountymd.gov/sebin/h/i/seal-color-74.png"
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
