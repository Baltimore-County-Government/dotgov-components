import React from "react";

const SummaryList = props => {
  const { items = [] } = props;
  return (
    <React.Fragment>
    <div className="dg_summary-list">
      {items.map(item => (
        <div  key={item.key} >
          <div className="dg_summary-list__item">
            <div className="icon icon-1">
              <i className={item.icon}></i>
            </div>
            <div className="heading">
              <h3>{item.heading} </h3>
            </div>
          </div>
          <div className="dg_summary-list__item">
            <div className="icon push"></div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
          </div>
      ))}
      </div>
    </React.Fragment>
  );
};

export default SummaryList;
