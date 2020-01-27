import React from "react";

const SiteNavButton = props => (
  <button
    className="bc_site-nav__toggle-button"
    id="bc_site-nav__toggle-button"
    type="button"
    aria-expanded="false"
    aria-controls="site-navigation"
  >
    <i className="far fa-bars"></i>
    <span className="bc_site-nav__toggle-button__text">Menu</span>
  </button>
);

export default SiteNavButton;
