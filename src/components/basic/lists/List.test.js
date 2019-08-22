import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

it("renders an `ul` without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<List />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("renders an `ol` without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<List type="ordered" />, div);
	ReactDOM.unmountComponentAtNode(div);
});
