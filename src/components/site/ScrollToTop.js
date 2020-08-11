import React from "react";

const Breadcrumbs = props => {
  return (
    <div className="dg_breadcrumbs">
      <a className="breadcrumb breadcrumb-first" href="/home">
        Home
      </a>
      {props.children}
    </div>
  );
};

export default Breadcrumbs;
