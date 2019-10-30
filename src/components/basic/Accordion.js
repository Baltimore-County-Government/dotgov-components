import React from "react";
import PropTypes from "prop-types";
import AccordionPanel from "./AccordionPanel";

const Accordion = props => {
  const { collapseItems = [] } = props;

  return (
    <div className="dg_accordion" key="accordion1">
      <button
        className="dg_allitems dg_button-link"
        key="collpaseAllActionButton1"
      >
        Open All
      </button>
      {collapseItems.map(item => {
        const { id, header, subheader, content } = item;
        return (
          <AccordionPanel id={id} header={header} subHeader={subheader}>
            {content}
          </AccordionPanel>
        );
      })}
    </div>
  );
};

Accordion.propTypes = {
  /** Populates the selectable items in the accordion. Header - the text describing the panel. SubHeader - Any text below the header. Content - any text or html element */
  collapseItems: PropTypes.array.isRequired
};

export default Accordion;
