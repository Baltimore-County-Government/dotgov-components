import React from "react";
import PropTypes from "prop-types";

const SummaryList = props => {
  const { items = [] } = props;
  return (
    <div className="dg_summary-list">
      {items.map(item => (
        <div id={item.id} key={item.id} className="dg_summary-list__item">
          <i key={`summaryListItemIcon${item.id}`} className={item.icon}></i>
          <div key={`summaryListItem${item.id}`}>
            <h3 key={`summaryListItemHeader${item.id}`}>{item.heading} </h3>
            <div
              key={`summaryListHidden${item.id}`}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

SummaryList.propTypes = {
  /** Populates the summary list item. id - makes elements unique. icon - icon to display. heading - text to display. content- any text or html element to display */
  items: PropTypes.array.isRequired
};

export default SummaryList;
