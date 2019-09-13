import React from "react";
import LogoType from "./LogoType";
import SiteStatus from "./SiteStatus";
import Search from "./Search";

const SiteHeader = props => (
  <header className="dg_header dg_site-header">
    {/* Hamburger Menu Will Go Here */}
    <div class="dg_brand">
      <LogoType header="Baltimore County" description="Government" />
      <SiteStatus status="Beta" />
    </div>
    <Search />
  </header>
);

export default SiteHeader;
