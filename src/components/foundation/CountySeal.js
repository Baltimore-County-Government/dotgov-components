import React from "react";
import classnames from "classnames";

const CountySeal = props => (
  <img
    className={classnames("dg_seal", props.className)}
    src="//baltimorecountymd.gov/sebin/p/u/county-seal.svg"
    alt="Image of the Baltimore County Seal"
  />
);

export default CountySeal;
