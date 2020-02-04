import React from "react";
import classnames from "classnames";

const ScrollableContainer = props => {
  const { children, className, ...rest } = props;
  const cssClasses = classnames("dg_scrollable-container", className);
  return (
    <div className={cssClasses} {...rest}>
      {children}
    </div>
  );
};

export default ScrollableContainer;
