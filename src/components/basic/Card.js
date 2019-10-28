import React from "react";
import classnames from "classnames";

const Card = props => {
  const { className } = props;
  const cssClasses = classnames("dg_card dg_component", className);
  return <div className={cssClasses}>{props.children}</div>;
};

export default Card;
