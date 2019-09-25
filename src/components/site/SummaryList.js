import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
const SummaryList = props => {
  const {
    iconMarker,
    iconClock,
    iconEnvelop,
    iconMobile,
    iconCircle,
    iconUser
  } = props;
  const iconCssClassesMain = classnames("side-list-ico", iconMarker);
  const iconCssClassesHours = classnames("side-list-ico", iconClock);
  const iconCssClassesEmail = classnames("side-list-ico", iconEnvelop);
  const iconCssClassesPhone = classnames("side-list-ico", iconMobile);
  const iconCssClassesBaltcogo = classnames("side-list-ico", iconCircle);
  const iconCssClassesDirector = classnames("side-list-ico", iconUser);
  return (
    <React.Fragment>
      <div className="dg_summary-list">
        <div className="col-md-12 bg-light px-4 py-4">
          <div className="row mb-3">
            <div className="col-2">
              <i className={iconCssClassesMain}></i>
            </div>
            <div className="col-10">
              <h3>Main Office:</h3>
              <p>
                111 West Chesapeake Avenue
                <br /> Suite 307
                <br /> Towson, Maryland 21204
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-2">
              <i className={iconCssClassesHours}></i>
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
              <i className={iconCssClassesEmail}></i>
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
              <i className={iconCssClassesPhone}></i>
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
              <i className={iconCssClassesBaltcogo}></i>
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
              <i className={iconCssClassesDirector}></i>
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

 SummaryList.propTypes = {

  /** Font Awesome icon class */
  icon: PropTypes.string.isRequired,
  /** label for that row */
  label: PropTypes.string,
  /** value of that level you wish to display */
  value: PropTypes.string,
 };

export default SummaryList;
