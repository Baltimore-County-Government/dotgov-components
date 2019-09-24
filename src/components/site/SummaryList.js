import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
const SummaryList = props => {
  const { icon, icon1, icon2, icon3, icon4, icon5, sampleText } = props;
  const iconCssClasses = classnames("side-list-ico", icon);
  const iconCssClasses1 = classnames("side-list-ico", icon1);
  const iconCssClasses2 = classnames("side-list-ico", icon2);
  const iconCssClasses3 = classnames("side-list-ico", icon3);
  const iconCssClasses4 = classnames("side-list-ico", icon4);
  const iconCssClasses5 = classnames("side-list-ico", icon5);
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
              <p>{sampleText}</p>
            </div>
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
              <i className={iconCssClasses2}></i>
            </div>
            <div class="col-10">
              <h3>Email:</h3>
              <p>
                <a href="#">publicworks@​baltimorecountymd.gov</a>
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-2">
              <i className={iconCssClasses3}></i>
            </div>
            <div className="col-10">
              <h3>Phone:</h3>
              <p>410-887-6789</p>
              <h3>Emergency Dispatch:</h3>
              <p>410-887-6789</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <i className={iconCssClasses4}></i>
            </div>

            <div className="col-10">
              <h3>BALTCOGO311:</h3>
              <p>
                <a href="#">Report a problem</a> online.
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <i className={iconCssClasses5}></i>
            </div>

            <div className="col-10">
              <h3>Director:</h3>
              <p>Steve Walsh, P.E.</p>
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
