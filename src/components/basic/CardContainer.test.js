import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import CardContentCenter from "./CardContentCenter";
import CardContentLeft from "./CardContentLeft";
import CardFooterCenter from "./CardFooterCenter";
import CardFooterLeft from "./CardFooterLeft";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Card>
      <CardContentCenter />
      <CardContentLeft />
      <CardFooterCenter />
      <CardFooterLeft />
    </Card>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
