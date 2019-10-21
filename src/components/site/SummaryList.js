import React from "react";

const SummaryList = props => {
  const { id, items = [] } = props;
  return (
    <div id={id} key={id} className="dg_summary-list">
      {items.map(item => (
        <div id={item.id} key={item.id} className="dg_summary-list__item">
          <i
            id={`summaryListItemIcon${item.id}`}
            key={`summaryListItemIcon${item.id}`}
            className={item.icon}
          ></i>
          <div
            id={`summaryListItem${item.id}`}
            key={`summaryListItem${item.id}`}
          >
            <h3
              id={`summaryListItemHeader${item.id}`}
              key={`summaryListItemHeader${item.id}`}
            >
              {item.heading}{" "}
            </h3>
            <div
              id={`summaryListHidden${item.id}`}
              key={`summaryListHidden${item.id}`}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryList;
