import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
const SummaryList = props => {
  const { icon, icon1 } = props;
  const iconCssClasses = classnames("side-list-ico", icon);
  const iconCssClasses1 = classnames("side-list-ico", icon1);
  const iconCssClasses2 = classnames("side-list-ico", icon2);
  return (
    <React.Fragment>
      <div className="dg_summary-list">
        <div className="col-md-12 bg-light px-4 py-4">
          <div className="row mb-3">
            <div className="col-2">
              <i className={iconCssClasses}></i>
            </div>
            <div className="col-10">
              <h3>Main Office:</h3>
              <p>
                111 West Chesapeake Avenue
                <br />
                Suite 307
                <br />
                Townson, Maryland 21204
              </p>
            </div>
            <div className="row mb-3">
              <div className="col-2">
                <i className={iconCssClasses1}></i>
              </div>
              <div className="col-10">
                <h3>Hours:</h3>
                <p>
                  Monday through Friday
                  <br />8 a.m. to 4:30 p.m.
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-2">
                <i className={iconCssClasses1}></i>
              </div>

              <div class="col-10">
                <h3>Email:</h3>
                <p>
                  <a href="#">publicworks@​baltimorecountymd.gov</a>
                </p>
              </div>
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
