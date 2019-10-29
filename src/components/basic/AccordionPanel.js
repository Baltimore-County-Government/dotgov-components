import React from "react";
import classNames from "classnames";

const AccordionPanel = props => {
  const { id, header, subHeader, content, className } = props;
  const cssClasses = classNames(
    "dg_accordion__collapsible",
    "collapsed",
    className
  );

  return (
    <div className={cssClasses}>
      <button
        className="dg_accordion-btn"
        type="button"
        aria-controls={`collapse-${id}`}
      >
        <span className="dg_accordion_buttontext-holder">{header}</span>

        <div className="dg_accordion__subheader">{subHeader}</div>
      </button>
      <div className="multi-collapse collapse">
        <div className="dg_accordion-item-body">{content}</div>
      </div>
    </div>
  );
};

export default AccordionPanel;
