import React from "react";
import classnames from "classnames";

const CardContent = props => {
  const { className } = props;
  const cssClasses = classnames("dg_card__content", className);
  return <div className={cssClasses}>{props.children}</div>;
};

export default CardContent;
