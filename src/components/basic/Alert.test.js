import React from "react";
import ReactDOM from "react-dom";
import Alert from "./Alert";

it("renders default alert without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Alert className="emergency" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders status alert without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Alert className="success status" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders status alert with an icon without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Alert className="success status" icon="fal fa-exclamation-triangle" />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
