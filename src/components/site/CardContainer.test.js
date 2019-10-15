import React from "react";
import ReactDOM from "react-dom";
import CardContainer from "./CardContainer";
import CardContentCenter from "./CardContentCenter";
import CardContentLeft from "./CardContentLeft";
import CardItem from "./CardItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CardContainer>
      <CardItem>
        <CardContentCenter />
        <CardContentLeft />
      </CardItem>
    </CardContainer>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
