import React from "react";
import PropTypes from "prop-types";

const SummaryList = (props) => {
  const { items = [] } = props;
  return (
    <div className="dg_summary-list">
      {items.map((item) => (
        <div key={item.id} className="dg_summary-list__item">
          <i className={`${item.icon} fa-fw`}></i>
          <div>
            <h3>{item.heading} </h3>
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
          </div>
        </div>
      ))}
    </div>
  );
};

SummaryList.propTypes = {
  /** Populates the summary list item. id - makes elements unique. icon - icon to display. heading - text to display. content- any text or html element to display */
  items: PropTypes.array.isRequired,
};

export default SummaryList;
