import React from "react";
import ReactDOM from "react-dom";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbItem from "./BreadcrumbItem";
import BreadcrumbLinkItem from "./BreadcrumbLinkItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Breadcrumbs>
      <BreadcrumbLinkItem text="Departments" title="This is a title" link="#" />
      <BreadcrumbLinkItem
        text="Department of Health"
        title="This is a title"
        link="#"
      />
      <BreadcrumbItem text="Adoptable Pets" />
    </Breadcrumbs>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
