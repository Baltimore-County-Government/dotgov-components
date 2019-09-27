import React from "react";

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


export default SummaryList;
