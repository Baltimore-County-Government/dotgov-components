import React from "react";
import classnames from "classnames";

const CardFooter = props => {
  const { className } = props;
  const cssClasses = classnames("dg_card__footer", className);
  return <div className={cssClasses}>{props.children}</div>;
};

export default CardFooter;
