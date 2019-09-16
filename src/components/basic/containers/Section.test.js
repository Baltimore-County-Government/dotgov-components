import React from "react";
import ReactDOM from "react-dom";
import Section from "./Section";
import Button from "../Button";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Section>
      <p>Some content goes here</p>
    </Section>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders a section with a cta button without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Section ctaButton={<Button text="View more things" />}>
      <p>Some content goes here</p>
    </Section>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
