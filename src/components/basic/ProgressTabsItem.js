import React from "react";

const ProgressTabsItem = (props) => {
  const { isHighlighted, name } = props.item;
  return <li className={isHighlighted ? "highlight" : ""}>{name}</li>;
};

export default ProgressTabsItem;
