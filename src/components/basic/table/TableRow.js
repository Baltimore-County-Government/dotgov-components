import React from "react";
import classnames from "classnames";

const TableRow = ({ className, children, ...rest })  => <tr className={classnames(className)}  {...rest}>{children}</tr>;

export default TableRow;
