import React from "react";
import classnames from "classnames";

const TableHeadCell = ({ className, children, ...rest }) => (
  <th  {...rest}>
    {children}
  </th>
);

export default TableHeadCell;
