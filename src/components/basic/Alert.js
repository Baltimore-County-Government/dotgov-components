import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Alert = props => {
  const { children, className = "", icon, type } = props;
  const cssClasses = classnames("dg_alert", className, type);
  const iconCssClasses = classnames("dg_alert__icon", icon);
  const isStatusAlert = className.toLowerCase().indexOf("status") > -1;

  return (
    <div className={cssClasses}>
      <div className="dg_alert__container">
        {icon && <i className={iconCssClasses}></i>}
        <div className="dg_alert__content">
          {type && isStatusAlert && (
            <span class="dg_alert__status">{type}</span>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  /** Font Awesome icon class */
  icon: PropTypes.string
};

export default Alert;
