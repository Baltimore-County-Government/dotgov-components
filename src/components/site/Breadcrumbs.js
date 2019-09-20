import React from "react";

const Breadcrumbs = props => {
  return (
    <ul className="dg_breadcrumbs">
      <li>
        <a href="#">
          <i class="fas fa-home fa-1x"></i>
        </a>
      </li>
      {props.children}
    </ul>
  );
};

export default Breadcrumbs;
