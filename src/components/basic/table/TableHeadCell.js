import React from "react";

const TableHeadCell = ({ className, children, ...rest }) => (
  <th className={className} {...rest}>
    {children}
  </th>
);

export default TableHeadCell;
