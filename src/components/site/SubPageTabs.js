import React from "react";
import PropTypes from "prop-types";

const SubPageTabs = props => {
  const { text, id, isExpanded = true } = props;
  return (
    <div className="dg_subpage-tabs-container">
      <div className="container">
        <div className="dg_subpage-tabs" id="dg_tabs">
          <button
            className="dg_subpage-tabs-btn"
            type="button"
            id={id}
            aria-expanded={isExpanded}
          >
            <h2 className="dg_accordion_buttontext-holder">{text}</h2>
          </button>
          <ul className="dg_tab-items">{props.children}</ul>
        </div>
      </div>
    </div>
  );
};

SubPageTabs.propTypes = {
  /** The copy that exists inside the a tag */
  text: PropTypes.string.isRequired,
  /** Unique identifier for your collapse */
  id: PropTypes.string.isRequired,
  /** Expand or Collapse panel */
  isExpanded: PropTypes.bool
};

export default SubPageTabs;
