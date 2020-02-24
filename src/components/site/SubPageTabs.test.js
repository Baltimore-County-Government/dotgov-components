import React from "react";
import ReactDOM from "react-dom";
import SubPageTabs from "./SubPageTabs";
import SubPageTabItem from "./SubPageTabItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <SubPageTabs text="In this section" id="testing">
      <SubPageTabItem text="Newsroom" link="/home" />
    </SubPageTabs>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
