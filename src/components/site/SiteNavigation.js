import React from "react";
import PropsTypes from "prop-types";
import SiteNavButton from "./SiteNavButton";
import CountySeal from "../foundation/CountySeal";

const SiteNavLink = props => {
  const { href, icon, text } = props;
  return (
    <li key={href}>
      <a href={href}>
        {icon && <i className={icon} aria-hidden="true"></i>}
        {text}
      </a>
    </li>
  );
};

const SiteNavigation = props => {
  const { links = [] } = props;

  return (
    <nav id="bc_site-nav" className="site-nav" role="navigation">
      <SiteNavButton />
      <div className="bc_site-nav__list-container invisible">
        <div className="text-center">
          <a href="/">
            <CountySeal className="bc_site-nav__seal" />
          </a>
        </div>
        <ul id="bc_site-nav__links" className="bc_site-nav__list">
          {links.map(link => (
            <SiteNavLink {...link} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

SiteNavigation.propTypes = {
  /** Array of links for the site nav, a link object should contain 'text' and 'href' properties. */
  links: PropsTypes.array
};

export default SiteNavigation;
