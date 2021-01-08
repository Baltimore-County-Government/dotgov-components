import React from "react";

const TableHeadCell = ({ className, children, ...rest }) => (
  <th  {...rest}>
    {children}
  </th>
);

export default TableHeadCell;
