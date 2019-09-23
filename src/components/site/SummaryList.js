import React from "react";
import PropTypes from "prop-types";

const SummaryList = props => {
  const { icon } = props;
  return (
    <React.Fragment>
      <div className="dg_summary-list">
        <div className="col-md-12 bg-light px-4 py-4">
          <div className="row">
            <div className="col-2">
              <i className="side-list-ico  fa-map-maker"> {icon}</i>
            </div>
            <div className="col-10">
              <h3>Main Office:</h3>
              <p>111 West Chesapeake Avenue</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

// LogoType.propTypes = {
//   /** A header for the logo i.e. vender name or Baltimore County */
//   header: PropTypes.string.isRequired,
//   /** Adds a description to the logo i.e. vendor catch phrase or Government */
//   description: PropTypes.string.isRequired
// };

export default SummaryList;
