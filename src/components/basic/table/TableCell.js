import React from "react";

const TableCell = ({ className, children, ...rest }) => (
  <td className={className} {...rest}>
    {children}
  </td>
);

export default TableCell;
