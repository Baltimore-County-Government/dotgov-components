import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Images = props => {
  const {  className } = props;
  const headerCssClasses = classnames("dg_page-header", className);
  return (
     <div className="headerCssClasses"> 
      <img
        className="dg_images__backgroundImage"
        src={props.imageSrc}
        aria-hidden="true"
       /> 
    </div>
  );
};
export default Images;

  {/* <div className="dg_card-content">
        <p>{props.imageHeader}</p>
        <p>
          <a href={props.imageLink}>{props.imageSubHeader}</a>
        </p>
      </div> */}