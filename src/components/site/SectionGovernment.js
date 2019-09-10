import React from "react";
import IconHeading from "../basic/IconHeading";

const SectionGovernment = props => (
  <div>
    <div>
      <IconHeading text="Your Government" icon="fa fa-university"></IconHeading>
    </div>
    <div>{props.children}</div>
  </div>
);

export default SectionGovernment;
