import React from "react";

const SummaryList = props => {
  const { items = [] } = props;
  return (
    <React.Fragment>
      {items.map(item => (
        <div key={item.key} className="dg_summary-list">
          <i className={item.icon}></i>
          <div className="dg_summary-list__item-content">
            <h3>{item.heading} </h3>
            <p>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default SummaryList;
