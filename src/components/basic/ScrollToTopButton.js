import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Button from "./Button";

const ScrollToTopButton = (props) => {
  const { icon, className, text } = props;
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button
      onClick={handleClick}
      text={text}
      className={className}
      icon={icon}
    />
  );
};

export default ScrollToTopButton;
