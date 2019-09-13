import React from "react";
import PropTypes from "prop-types";

const AlternateList = props => {
  const { type = "", children } = props;
  return type.toLowerCase() === "ordered" ? (
    <ol className="dg_alt-list">{children}</ol>
  ) : (
    <ul className="dg_alt-list">{children}</ul>
  );
};

AlternateList.propTypes = {
  /** Either `unordered` or `ordered`, will be ul by default */
  type: PropTypes.string
};

export default AlternateList;
