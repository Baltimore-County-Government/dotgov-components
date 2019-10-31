import React from "react";
import PropTypes from "prop-types";
import AccordionPanel from "./AccordionPanel";

const Collapse = props => {
  const { id, header, children, isExpanded = true } = props;
  return (
    <AccordionPanel
      id={id}
      header={header}
      className="dg_collapse"
      isExpanded={isExpanded}
    >
      {children}
    </AccordionPanel>
  );
};

Collapse.propTypes = {
  /** Unique identifier for your collapse */
  id: PropTypes.string.isRequired,
  /** Heading text */
  header: PropTypes.string.isRequired,
  /** Expand or Collapse panel */
  isExpanded: PropTypes.bool
};

export default Collapse;
