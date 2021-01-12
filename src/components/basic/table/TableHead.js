import React from "react";
import classnames from "classnames";

const TableHead = ({ className, children, ...rest }) => (
  <thead className={classnames(className)} {...rest}>
    {props.children}
  </thead>
);

export default TableHead;
