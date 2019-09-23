import React from "react";
import PropTypes from "prop-types";

const PageHeader = props => (
  <div className="dg_page-header">
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
);

PageHeader.propTypes = {
  /** PreTitle: Type of agency, e,g., "Department of" or "Office of" to be displayed */
  preTitle: PropTypes.string,
  /** title: Agency name, e.g., "Budeget and Finance" to be displayed */
  title: PropTypes.string.isRequired,
  /** deck: Brief description of the agency's function. */
  deck: PropTypes.string
};

export default PageHeader;
