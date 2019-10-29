import React from "react";
import AccordionPanel from "./AccordionPanel";

const Collapse = props => {
  const { id, header, subHeader, content } = props;
  return (
    <AccordionPanel
      id={id}
      header={header}
      subHeader={subHeader}
      content={content}
      className="dg_collapse"
    />
  );
};

export default Collapse;
