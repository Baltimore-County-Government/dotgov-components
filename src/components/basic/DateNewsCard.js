import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DateNewsCard = props => {
  return (
    <React.Fragment>
      <div className="dg_news-content dg_section dark">
        <div className="pb-3 col-md-6 col-lg-6 col-xl-3 lat-new-tile">
          <div className="row">
            <div className="col-md-4 align-text-center">
              <p>
                <span className="lat-new-month">{props.month}</span>
                <span className="lat-new-day">{props.day}</span>
              </p>
            </div>
            <div className="col-md-8">
              <h3 className="headline-light">{props.headline}</h3>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <p>{props.news}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DateNewsCard;
