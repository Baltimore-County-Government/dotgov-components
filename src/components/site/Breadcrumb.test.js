import React from "react";
import ReactDOM from "react-dom";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbLinkItem from "./BreadCrumbLinkItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Breadcrumbs>
      <BreadcrumbLinkItem text="Departments" link="#" />
      <BreadcrumbLinkItem text="Adoptable Pets" link="#" />
    </Breadcrumbs>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
