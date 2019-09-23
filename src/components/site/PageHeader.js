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
  /** PreTitle to be displayed */
  preTitle: PropTypes.string,
  /** Title to be displayed */
  title: PropTypes.string.isRequired,
  /** A brief summary the describes the page the header is included on. */
  deck: PropTypes.string
};

export default PageHeader;
