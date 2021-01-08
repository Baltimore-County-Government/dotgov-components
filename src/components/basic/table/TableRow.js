import React from "react";

const TableRow = ({ className, children, ...rest })  => <tr  {...rest}>{children}</tr>;

export default TableRow;
