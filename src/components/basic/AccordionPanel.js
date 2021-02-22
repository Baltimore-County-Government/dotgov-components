import React from "react";
import classNames from "classnames";

const AccordionPanel = props => {
  const {
    id,
    header,
    children,
    subHeader,
    className,
    isExpanded,
    priority
  } = props;
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
  const CustomTag =
    JSON.stringify({ priority }) === "{}" ? "span" : `h${priority}`;
  return (
    <div className={panelCssClasses}>
      <button
        className="dg_accordion-btn"
        type="button"
        id={buttonId}
        aria-expanded={isExpanded}
      >
        <CustomTag className="dg_accordion_buttontext-holder">
          {header}
        </CustomTag>
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
