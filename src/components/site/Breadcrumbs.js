import React from "react";

const Breadcrumbs = props => {
  return (
    <ul className="dg_breadcrumbs">
      <li>
        <a title="Home" href="/">
          <i className="fas fa-home fa-1x" aria-hidden="true"></i>
          <span className="sr-only">Home</span>
        </a>
      </li>
      {props.children}
    </ul>
  );
};

export default Breadcrumbs;
