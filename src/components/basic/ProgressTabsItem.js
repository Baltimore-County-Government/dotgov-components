import React from "react";

const ProgressTabsItem = (props) => {
  const { id, isHighlighted, name } = props.item;
  return (
    <li key={id} className={isHighlighted ? "highlight" : ""}>
      {name}
    </li>
  );
};

export default ProgressTabsItem;
