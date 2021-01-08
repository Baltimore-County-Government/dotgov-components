import React from "react";

const TableCell = ({ className, children, ...rest }) => (
  <td {...rest}>{children}</td>
);

export default TableCell;
