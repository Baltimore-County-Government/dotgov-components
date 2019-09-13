import React from "react";
import ReactDOM from "react-dom";
import DateNewsCard from "./DateNewsCard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <DateNewsCard
      link="/news-story"
      date="07/28/2019"
      headline="Really import news story."
      snippet="This is a really short descriptive comment about the news story."
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("should throw error if an improper date is passed in.", () => {
  global.console = { error: jest.fn() };

  const div = document.createElement("div");
  ReactDOM.render(
    <DateNewsCard
      link="/news-story"
      date="invalid date format"
      headline="Really import news story."
      snippet="This is a really short descriptive comment about the news story."
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);

  expect(console.error).toBeCalled();
});
