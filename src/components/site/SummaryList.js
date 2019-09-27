import React from "react";
import PropTypes from "prop-types";

const SummaryList = props => {
  const { items = [] } = props;
  return (
    <React.Fragment>
      {items.map(item => (
        <div className="dg_summary-list">
          <div className="dg_summary-list-items">
            <aside className="icon icon-1">
              <i className={item.icon}></i>
            </aside>
            <div className="heading">
              <h3>{item.heading} </h3>
            </div>
          </div>
          <div className="dg_summary-list-items">
          <aside className="icon push"></aside>
              <div className="content" dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

SummaryList.propTypes = {
  /** icon: Supplemental heading, e,g., "Department of" or "Office of" to be displayed */
  icon: PropTypes.string.isRequired,
  /** heading: Main page heading, e.g., "MAIN OFFICE" to be displayed */
  heading: PropTypes.string.isRequired,
  /** content: content of a page or app. */
  content: PropTypes.string
};

export default SummaryList;
