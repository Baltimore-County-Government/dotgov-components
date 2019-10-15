import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Section = props => {
  const { className = "", children, ctaButton, backgroundImage } = props;
  const cssClasses = classnames("dg_section", className);
  return (
    <section className={cssClasses}>
      {backgroundImage && (
        <img
          className="dg_section__background-image"
          src={backgroundImage}
          aria-hidden="true"
        />
      )}
      {children}
      {ctaButton && <div className="dg_section-cta">{ctaButton}</div>}
    </section>
  );
};

Section.propTypes = {
  /** Call to action button located at the end of the section */
  ctaButton: PropTypes.element,
  /** Url to a gray scale image in which the overlay color will be handled by css */
  backgroundImage: PropTypes.string
};

export default Section;
