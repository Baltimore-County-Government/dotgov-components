import React from "react";

const AlternateListItem = props => (
  <li>
    <a href="#">
      {props.children}
      <i className="fa fa-angle-right dg_i-float-right" aria-hidden="true"></i>
    </a>
  </li>
);

export default AlternateListItem;
