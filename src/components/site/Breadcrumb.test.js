import BreadCrumbLinkItem from "./BreadCrumbLinkItem";
import Breadcrumbs from "./Breadcrumbs";
import React from "react";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Breadcrumbs>
      <BreadCrumbLinkItem text="Departments" link="#" />
      <BreadCrumbLinkItem text="Adoptable Pets" link="#" />
    </Breadcrumbs>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
