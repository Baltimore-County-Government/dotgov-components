import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";

const Button = props => {
  const {
    as: As = "button",
    icon,
    className,
    type = "button",
    text,
    ...rest
  } = props;
  const buttonCssClasses = classnames("dg_button", className);
  const iconCssClasses = classnames("dg_button_icon", icon);
  const buttonIcon = icon ? (
    <i aria-hidden="true" className={iconCssClasses} />
  ) : null;
  return As === "button" ? (
    <As type={type} className={buttonCssClasses} {...rest}>
      {buttonIcon}
      {text}
    </As>
  ) : (
    <As className={buttonCssClasses} {...rest}>
      {buttonIcon}
      {text}
    </As>
  );
};

Button.propTypes = {
  /** Button Text */
  text: PropTypes.string.isRequired,
  /** Font Awesome icon class */
  icon: PropTypes.string,
  /** Button Type - either `button`, `submit`, `reset` */
  type: PropTypes.string,
  /** Render button as a button or link */
  as: PropTypes.any
};

export default Button;
