import React from "react";
import PropTypes from "prop-types";

const List = props => {
  const { type = "", children } = props;
  return type.toLowerCase() === "ordered" ? (
    <ol className="dg_alt-list">{children}</ol>
  ) : (
    <ul className="dg_alt-list">{children}</ul>
  );
};

List.propTypes = {
  /** Either `unordered` or `ordered`, will be ul by default */
  type: PropTypes.string
};

export default List;
