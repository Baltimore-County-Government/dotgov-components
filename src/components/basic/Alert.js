import React from "react";
import classnames from "classnames";

const Alert = props => {
  const { className, children } = props;
  const cssClasses = classnames("dg_alert", className);
  return <div className={cssClasses}>{children}</div>;
};

export default Alert;
