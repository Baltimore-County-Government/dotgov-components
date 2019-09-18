import React from "react";
import PropTypes from "prop-types";
import LogoType from "./LogoType";
import SiteStatus from "./SiteStatus";
import Search from "./Search";

const SiteHeader = props => {
  const { status, heading, subHeading } = props;
  return (
    <header className="dg_header dg_site-header">
      {/* Hamburger Menu Will Go Here */}
      <div className="dg_brand">
        <a href="/" title="View the Baltimore County Government homepage.">
          <LogoType header={heading} description={subHeading} />
        </a>
        <SiteStatus status={status} />
      </div>
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
