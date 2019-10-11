import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Section = props => {
  const { className = "", children, ctaButton, backGroundImage } = props;
  const cssClasses = classnames("dg_section", className);
  return (
    <section className={cssClasses}>
      <div>
        {backGroundImage && (
          <img
            className="dg_section__background-image"
            src={backGroundImage}
            aria-hidden="true"
          />
        )}
        {children}
        {ctaButton && <div className="dg_section-cta">{ctaButton}</div>}
      </div>
    </section>
  );
};

Section.propTypes = {
  /** Call to action button located at the end of the section */
  ctaButton: PropTypes.element
};

export default Section;
