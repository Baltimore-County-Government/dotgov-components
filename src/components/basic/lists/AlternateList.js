import React from "react";
import PropTypes from "prop-types";

const AlternateList = (props) => {
  const { type = "", children, className = "dg_alt-list" } = props;
  return type.toLowerCase() === "ordered" ? (
    <ol className={className}>{children}</ol>
  ) : (
    <ul className={className}>{children}</ul>
  );
};

AlternateList.propTypes = {
  /** Either `unordered` or `ordered`, will be ul by default */
  type: PropTypes.string,
};

export default AlternateList;
