import React from "react";
import PropTypes from "prop-types";

const LogoType = props => (
  <div className="dg_logotype">
    <span>{props.header}</span>
    <span>{props.description}</span>
  </div>
);

LogoType.propTypes = {
  /** A header for the logo i.e. vender name or Baltimore County */
  header: PropTypes.string.isRequired,
  /** Adds a description to the logo i.e. vendor catch phrase or Government */
  description: PropTypes.string.isRequired
};

export default LogoType;
