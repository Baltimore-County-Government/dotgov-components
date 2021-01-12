import React from "react";
import classnames from "classnames";

const TableHeadCell = ({ className, children, ...rest }) => (
  <th className={classnames(className)} {...rest}>
    {children}
  </th>
);

export default TableHeadCell;
