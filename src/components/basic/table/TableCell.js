import React from "react";
import classnames from "classnames";

const TableCell = ({ className, children, ...rest }) => (
  <td {...rest}>{children}</td>
);

export default TableCell;
