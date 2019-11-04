import React from "react";
import classnames from "classnames";

const ImagePlaceholder = props => (
  <svg
    width="100%"
    height="150px"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
    role="img"
    aria-label="Placeholder: Thumbnail"
  >
    <rect width="100%" height="150px" fill="#C2C2C2"></rect>
  </svg>
);

export default ImagePlaceholder;
