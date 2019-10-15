import React from "react";
import PropTypes from "prop-types";

const Accordion = props => {
  const { toggleMultiOpen, className } = props;
  const { collapseItems = [] } = props;

  return (
    <div
      className={`dg_accordion ${
        toggleMultiOpen === true ? "canHaveMultiplePanelsOpen" : ""
      } ${className}`}
      key="accordion1"
    >
      <button
        className="dg_allitems dg_button-link"
        key="collpaseAllActionButton1"
      >
        Open All
      </button>
      {collapseItems.map(item => {
        const { id, header, subheader, content } = item;
        return (
          <div
            key={`collpaseAccordionHeader${id}`}
            id={`collpaseAccordionHeader${id}`}
            className="collapsed dg_accordion__collapsible"
          >
            <button
              key={`collapseAccordionButton${id}`}
              id={`collapseAccordionButton${id}`}
              className="dg_accordion-btn"
              type="button"
              aria-controls="collapseOne"
            >
              <span className="dg_accordion_buttontext-holder">{header}</span>

              <div
                key={`collpaseAccordionSubHeader${id}`}
                id={`collpaseAccordionSubHeader${id}`}
                className="dg_accordion__subheader"
              >
                {subheader}
              </div>
            </button>
            <div
              key={`collapseOne${id}`}
              id={`collapseOne${id}`}
              className="multi-collapse collapse"
              data-parent="#accordionExample1"
            >
              <div
                key={`collpaseAccordionMainText${id}`}
                id={`collpaseAccordionMainText${id}`}
                className="dg_accordion-item-body"
              >
                {content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.propTypes = {
  /** Populates the selectable items in the accordion */
  collapseItems: PropTypes.array.isRequired,
  /** Content of the selected item */
  toggleMultiOpen: PropTypes.bool
};

export default Accordion;
