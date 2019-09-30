import React from "react";

const SummaryList = props => {
  const { items = [] } = props;
  return (
    <React.Fragment>
    <div className="dg_summary-list">
      {items.map(item => (
        <div key={item.key} className="dg_summary-list__item">
          <i className={item.icon}></i>
          <div>
            <h3>{item.heading} </h3>
            <p>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </p>
          </div>
        </div>
      ))}
    </div>
    </React.Fragment>
  );
};

export default SummaryList;
