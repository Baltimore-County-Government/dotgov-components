import React from "react";
import classnames from "classnames";

const Scrollable = props => {
  const { children, className, ...rest } = props;
  const cssClasses = classnames("dg_scrollable", className);
  return (
    <div className={cssClasses} {...rest}>
      {children}
    </div>
  );
};

export default Scrollable;
