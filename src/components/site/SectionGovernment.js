import React from "react";

const SectionGovernment = props => (
  <div class="container your-govt">
    <div className="dg_your_gov">
      <div className="dg_section_government">
        <div className="dg_icon_container">
          <i className="fa fa-university" aria-hidden="true"></i>
        </div>
        <h3>Your Government</h3>
      </div>
      <div>{props.children}</div>
    </div>
  </div>
);
export default SectionGovernment;
