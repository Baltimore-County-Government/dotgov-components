import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const PageHeader = props => {
  const {
    title,
    preTitle,
    deck,
    backGroundImage,
    className,
    Breadcrumbs
  } = props;
  const headerCssClasses = classnames(
    "dg_page-header",
    className ? `themed ${className}` : null
  );
  return (
    <div className={headerCssClasses}>
      {backGroundImage && (
        <img
          className="dg_page-header__backgroundImage"
          src={backGroundImage}
          aria-hidden="true"
        />
      )}
      <div className="dg_page-header__container">
        <div className="container">
          {Breadcrumbs && (
            <div className="row">
              <div className="col">
                <Breadcrumbs />
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-12 col-lg-5 col-xl-6">
              {preTitle && (
                <span className="dg_page-header__pre-title">{preTitle}</span>
              )}
              <span className="dg_page-header__title">{title} </span>
            </div>
            <div className="col-12 col-lg-7 col-xl-6">
              {deck && <p className="dg_page-header__deck">{deck}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  /** PreTitle: Supplemental heading, e,g., "Department of" or "Office of" to be displayed */
  preTitle: PropTypes.string,
  /** title: Main page heading, e.g., "Budget and Finance" to be displayed */
  title: PropTypes.string.isRequired,
  /** deck: Brief description of the landing page or app. */
  deck: PropTypes.string,
  /** Implementation of the breadcrumbs component */
  Breadcrumbs: PropTypes.func
};

export default PageHeader;
