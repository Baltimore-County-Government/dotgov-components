import React from "react";
import classNames from "classnames";

const AccordionPanel = props => {
  const { id, header, children, subHeader, className, isExpanded } = props;
  const panelCssClasses = classNames(
    "dg_accordion__collapsible",
    isExpanded ? null : "collapsed",
    className
  );
  const contentCssClasses = classNames(
    "multi-collapse collapse",
    isExpanded ? "show" : null
  );
  const buttonId = `accordion-btn-${id}`;

  return (
    <div className={panelCssClasses}>
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
        className={contentCssClasses}
        aria-labelledby={buttonId}
        aria-expanded={isExpanded}
      >
        <div className="dg_accordion-item-body">{children}</div>
      </div>
    </div>
  );
};

export default AccordionPanel;
