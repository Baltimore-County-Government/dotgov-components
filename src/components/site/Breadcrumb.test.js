import React from "react";
import ReactDOM from "react-dom";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbItem from "./Breadcrumbitem";
import BreadcrumbLinkItem from "./BreadcrumbLinkItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Breadcrumbs>
      <BreadcrumbLinkItem
        breadcrumbText="Departments"
        title="This is a title"
        link="#"
      />
      <BreadcrumbLinkItem
        breadcrumbText="Department of Health"
        title="This is a title"
        link="#"
      />
      <BreadcrumbItem breadcrumbText="Adoptable Pets" />
    </Breadcrumbs>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
