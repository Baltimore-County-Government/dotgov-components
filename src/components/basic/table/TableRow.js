import React from "react";

const TableRow = ({ className, children, ...rest })  => <tr className={className}  {...rest}>{children}</tr>;

export default TableRow;
