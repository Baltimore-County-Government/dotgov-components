import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Card>
      <CardContent>
        <p>This is some content</p>
      </CardContent>
      <CardFooter>
        <p>This is a footer.</p>
      </CardFooter>
    </Card>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
