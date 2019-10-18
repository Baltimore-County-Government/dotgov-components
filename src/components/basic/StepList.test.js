import React from "react";
import ReactDOM from "react-dom";
import StepList from "./StepList";
import StepListItem from "./StepListItem";

it("renders collapsed step list without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StepList type="collapsed">
      <StepListItem id="test-1" buttonText="Step 1">
        <p>Some step content here</p>
      </StepListItem>
      <StepListItem id="test-2" buttonText="Step 2">
        <p>Some step content here</p>
      </StepListItem>
      <StepListItem id="test-3" buttonText="Step 3">
        <p>Some step content here</p>
      </StepListItem>
    </StepList>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders expanded step list without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StepList type="expanded">
      <StepListItem id="test-1" buttonText="Step 1">
        <p>Some step content here</p>
      </StepListItem>
      <StepListItem id="test-2" buttonText="Step 2">
        <p>Some step content here</p>
      </StepListItem>
      <StepListItem id="test-3" buttonText="Step 3">
        <p>Some step content here</p>
      </StepListItem>
    </StepList>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders static step list without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StepList type="static">
      <StepListItem id="test-1" buttonText="Step 1">
        <p>Some step content here</p>
      </StepListItem>
      <StepListItem id="test-2" buttonText="Step 2">
        <p>Some step content here</p>
      </StepListItem>
      <StepListItem id="test-3" buttonText="Step 3">
        <p>Some step content here</p>
      </StepListItem>
    </StepList>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
