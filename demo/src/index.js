import React, { Component } from "react";
import { render } from "react-dom";
import { TextInput } from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>test-dotgov-components Demo</h1>
        <TextInput hint="Enter your full name here." />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
