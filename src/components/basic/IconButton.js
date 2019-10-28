import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const IconButton = props => {
  const defaultSize = "large";
  const {
    icon,
    href,
    description,
    size = defaultSize,
    shape,
    type = "button",
    text,
    className,
    ...rest
  } = props;
  const cssClasses = classnames(
    "dg_icon-link",
    `dg_icon-link--${size}`,
    type ? `dg_icon-link--${shape}` : null,
    className
  );
  const iconCssClasses = classnames("dg_icon", icon);
  const linkIcon = icon ? (
    <i aria-hidden="true" className={iconCssClasses} />
  ) : null;
  return (
    <button
      className={cssClasses}
      type={type}
      {...rest}
      aria-label={description}
    >
      {linkIcon}
      {text && <span>{text}</span>}
    </button>
  );
};

IconButton.propTypes = {
  /**  A text description of the action the button provides. */
  description: PropTypes.string.isRequired,
  /** Font Awesome icon class */
  icon: PropTypes.string.isRequired,
  /** Visual type of the icon link, possible values are `rectangle` and `circle` */
  shape: PropTypes.string,
  /** Button Text*/
  text: PropTypes.string,
  /** HTML Button type, 'button', 'submit', 'reset' */
  type: PropTypes.string
};

export default IconButton;
