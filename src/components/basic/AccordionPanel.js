import React from "react";
import classNames from "classnames";

const AccordionPanel = props => {
  const {
    id,
    header,
    children,
    subHeader,
    className,
    isExpanded = false
  } = props;
  const cssClasses = classNames(
    "dg_accordion__collapsible",
    "collapsed",
    className
  );
  const buttonId = `accordion-btn-${id}`;

  return (
    <div className={cssClasses}>
      <button
        className="dg_accordion-btn"
        type="button"
        id={buttonId}
        aria-expanded={isExpanded}
      >
        <span className="dg_accordion_buttontext-holder">{header}</span>
        {subHeader && (
          <div className="dg_accordion__subheader">{subHeader}</div>
        )}
      </button>
      <div
        className="multi-collapse collapse"
        aria-labelledby={buttonId}
        aria-expanded={isExpanded}
      >
        <div className="dg_accordion-item-body">{children}</div>
      </div>
    </div>
  );
};

export default AccordionPanel;
