import React from "react";
import PropTypes from "prop-types";
import AccordionPanel from "./AccordionPanel";

const Collapse = props => {
  const { id, header, content } = props;
  return (
    <AccordionPanel
      id={id}
      header={header}
      content={content}
      className="dg_collapse"
    />
  );
};

Collapse.propTypes = {
  /** Unique identifier for your collapse */
  id: PropTypes.string.isRequired,
  /** Heading text */
  header: PropTypes.string.isRequired
  /** Component content that you want the user to be able to hid e and show  */
};

export default Collapse;
