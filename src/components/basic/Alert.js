import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const statusIcons = {
  success: "far fa-check",
  information: "far fa-info-circle",
  warning: "far fa-exclamation-triangle",
  error: "fas fa-exclamation-circle"
};

const Alert = props => {
  const { children, className = "", icon, type } = props;
  const cssClasses = classnames("dg_alert", className, type);
  const iconCssClasses = classnames(
    "dg_alert__icon",
    type ? statusIcons[type] : null
  );
  const isStatusAlert = className.toLowerCase().indexOf("status") > -1;

  return (
    <div className={cssClasses}>
        {type && isStatusAlert && (
          <span className="dg_alert__status">
            {icon && <i className={iconCssClasses}></i>}
            {type}
          </span>
        )}
        {children}
      </div>
  );
};

Alert.propTypes = {
  /** Font Awesome icon class */
  icon: PropTypes.string,
  /** Type of alert you wish to display, possible values are 'emergency', 'success', 'information', 'warning', 'error' */
  type: PropTypes.string
};

export default Alert;
