import React from "react";
import classnames from "classnames";

const TableRow = ({ className, children, ...rest })  => <tr  {...rest}>{children}</tr>;

export default TableRow;
