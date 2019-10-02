import React from "react";

const Accordion = props => {
  const { collpaseItems = [] } = props;
  return (
    <div className="dg_accordion dg_allowmultipleopen" id="accordionExample1">
      <button className="dg_allitems" id="menuActionButton1">
        Open All
      </button>

      {collpaseItems.map(item => (
        <div className="collapsed dg_accordian__collpasible">
          <button
            className="fa dg_accordian-btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target={`#collapseOne${item.id}`}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {item.header}
            <div className="dg_accordion__subheader">{item.subheader}</div>
          </button>
          <div
            id={`collapseOne${item.id}`}
            className="multi-collapse collapse"
            data-parent="#accordionExample1"
          >
            <div className="dg_accordian-item-body">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
