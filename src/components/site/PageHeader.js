import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';

const PageHeader = props => {
  const headerCssClasses = classnames('dg_page-header', props.transparent);
  return (
 
  <div className={headerCssClasses}>
    <img src={props.backGroundImage} />
    <div className="dg_page-header-top-left">
    <div className="row">
        <div className="col-12 col-lg-5 col-xl-6">
          <span className="dg_page-header__pre-title">
            {props.preTitle !== undefined ? props.preTitle : null}
          </span>
          <span className="dg_page-header__title">{props.title} </span>
        </div>
        <div className="col-12 col-lg-7 col-xl-6">
          <p>{props.deck !== undefined ? props.deck : null}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

PageHeader.propTypes = {
/** transparent: Displays transparent color on the top of the image */
  transparent: PropTypes.string,
  /** PreTitle: Supplemental heading, e,g., "Department of" or "Office of" to be displayed */
  preTitle: PropTypes.string,
  /** title: Main page heading, e.g., "Budeget and Finance" to be displayed */
  title: PropTypes.string.isRequired,
  /** deck: Brief description of the landing page or app. */
  deck: PropTypes.string
};

export default PageHeader;
