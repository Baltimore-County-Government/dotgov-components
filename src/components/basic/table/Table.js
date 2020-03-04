import React from "react";
import classnames from "classnames";

const Table = ({ className, children, ...rest }) => (
  <table className={classnames("table", className)} {...rest}>
    {children}
  </table>
);

export default Table;
