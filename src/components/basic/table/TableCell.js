import React from "react";
import classnames from "classnames";

const TableCell = ({ className, children, ...rest }) => (
  <td className={classnames(className)} {...rest}>
    {children}
  </td>
);

export default TableCell;
