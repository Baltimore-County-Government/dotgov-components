import React from "react";
import ReactDOM from "react-dom";
import PageHeader from "./PageHeader";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbItem from "./Breadcrumbitem";
import BreadcrumbLinkItem from "./BreadcrumbLinkitem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <PageHeader
      preTitle="department of "
      title="public works"
      deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders with breadcrumbs without crashing", () => {
  const breadCrumbs = () => (
    <Breadcrumbs>
      <BreadcrumbLinkItem
        text="Departments"
        title="This is a title"
        link="/departments"
      />
      <BreadcrumbLinkItem
        text="Department of Health"
        title="This is a title"
        link="/departments/health"
      />
      <BreadcrumbItem text="Adoptable Pets" />
    </Breadcrumbs>
  );
  const div = document.createElement("div");
  ReactDOM.render(
    <PageHeader
      breadCrumbs={breadCrumbs}
      preTitle="department of "
      title="public works"
      deck="The Department of Public Works oversees and maintains the County’s public infrastructure, including highways, utilities, and trash and recycling."
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
