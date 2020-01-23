import BreadCrumbLinkItem from "./BreadCrumbLinkItem";
import Breadcrumbs from "./Breadcrumbs";
import PageHeader from "./PageHeader";
import React from "react";
import ReactDOM from "react-dom";

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
      <BreadCrumbLinkItem
        text="Departments"
        title="This is a title"
        link="/departments"
      />
      <BreadCrumbLinkItem
        text="Department of Health"
        title="This is a title"
        link="/departments/health"
      />
      <BreadCrumbLinkItem
        className="breadcrumb-last"
        text="Adoptable Pets"
        link="/departments/health"
      />
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
