import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Alert = props => {
  const { children, className, icon } = props;
  const cssClasses = classnames("dg_alert", className);
  const iconCssClasses = classnames("dg_alert__icon", icon);

  return (
    <div className={cssClasses}>
      {icon && <i class={iconCssClasses}></i>}
      <div class="dg_alert__content">{children}</div>
    </div>
  );
};

Alert.propTypes = {
  /** Font Awesome icon class */
  icon: PropTypes.string
};

export default Alert;
