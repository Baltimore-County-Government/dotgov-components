import React from "react";
import PropTypes from "prop-types";

const Accordion = props => {
  const { toggleMultiOpen, className } = props;
  const { collapseItems = [] } = props;

  return (
    <div
      className={`dg_accordion ${toggleMultiOpen} ${className}`}
      key="accordion1"
    >
      <button
        className="dg_allitems dg_button-link"
        key="collpaseAllActionButton1"
      >
        Open All
      </button>

      {collapseItems.map(item => (
        <div
          key={`collpaseAccordionHeader${item.id}`}
          id={`collpaseAccordionHeader${item.id}`}
          className="collapsed dg_accordion__collapsible"
        >
          <button
            key={`collapseAccordionButton${item.id}`}
            id={`collapseAccordionButton${item.id}`}
            className="dg_accordion-btn"
            type="button"
            aria-controls="collapseOne"
          >
            {item.header}
            <div
              key={`collpaseAccordionSubHeader${item.id}`}
              id={`collpaseAccordionSubHeader${item.id}`}
              className="dg_accordion__subheader"
            >
              {item.subheader}
            </div>
          </button>
          <div
            key={`collapseOne${item.id}`}
            id={`collapseOne${item.id}`}
            className="multi-collapse collapse"
            data-parent="#accordionExample1"
          >
            <div
              key={`collpaseAccordionMainText${item.id}`}
              id={`collpaseAccordionMainText${item.id}`}
              className="dg_accordion-item-body"
            >
              {item.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  /** Populates the selectable items in the accordion */
  collapseItems: PropTypes.array.isRequired,
  /** Content of the selected item */
  toggleMultiOpen: PropTypes.string,
  /** Can add extra cssclass to the element EX. Dark */
  className: PropTypes.string
};

export default Accordion;
