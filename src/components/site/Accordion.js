import React from "react";
import PropTypes from "prop-types";

const Accordion = props => {
  const { collapseItems = [] } = props;
  return (
    <div
      className={`dg_accordion ${props.toggleMultiOpen} ${props.className}`}
      id="accordionExample1"
    >
      <button className="dg_allitems" id="menuActionButton1">
        Open All
      </button>

      {collapseItems.map(item => (
        <div className="collapsed dg_accordion__collapsible">
          <button
            className="fa dg_accordion-btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target={`#collapseOne${item.id}`}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {item.header}
            <div className="dg_accordion__subheader">{item.subheader}</div>
          </button>
          <div
            id={`collapseOne${item.id}`}
            className="multi-collapse collapse"
            data-parent="#accordionExample1"
          >
            <div className="dg_accordion-item-body">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// SiteHeader.propTypes = {
//   /** Status to describe the site, Ex. Beta*/
//   status: PropTypes.string,
//   /** Primary header text for the site, Ex. Baltimore County  */
//   heading: PropTypes.string.isRequired,
//   /** Secondary header text for the site, Ex. Government  */
//   subHeading: PropTypes.string.isRequired
// };

export default Accordion;
