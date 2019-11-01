import React from "react";
import PropTypes from "prop-types";
import BrandText from "./BrandText";
import SiteStatus from "./SiteStatus";
import Search from "./Search";

const SiteHeader = props => {
  const { status, heading, subHeading } = props;
  return (
    <header className="dg_header dg_site-header">
      <div className="dg_brand">
        <div id="fake-site-nav-button"></div>
        <a href="/" title="View the Baltimore County Government homepage.">
          <BrandText header={heading} description={subHeading} />
        </a>
        <SiteStatus status={status} />
      </div>
      <button className="dg_mobile-search-button">
        <i className="fas fa-search" aria-hidden="true"></i>
      </button>
      <Search />
    </header>
  );
};

SiteHeader.propTypes = {
  /** Status to describe the site, Ex. Beta*/
  status: PropTypes.string,
  /** Primary header text for the site, Ex. Baltimore County  */
  heading: PropTypes.string.isRequired,
  /** Secondary header text for the site, Ex. Government  */
  subHeading: PropTypes.string.isRequired
};

export default SiteHeader;
