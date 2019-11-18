import React from "react";
import ReactDOM from "react-dom";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbLastItem from "./BreadcrumbLastItem";
import BreadcrumbLinkItem from "./BreadCrumbLinkItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Breadcrumbs>
      <BreadcrumbLinkItem text="Departments" link="#" />
      <BreadcrumbLastItem text="Adoptable Pets" link="#" />
    </Breadcrumbs>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
