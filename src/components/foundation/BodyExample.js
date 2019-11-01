import React from "react";

const headingExampleStyles = {
  borderTop: "1px solid lightgray",
  padding: "20px"
};

const titleStyles = {
  color: "gray",
  display: "block",
  marginBottom: "15px"
};

const BodyExample = props => {
  return (
    <React.Fragment>
      <section className="example-section">
        <div style={{ padding: "20px" }}>
          <span style={titleStyles}>Normal Paragraph</span>
          <p>
            This is normal paragraph text. The font used for normal paragraph
            text is Crimson Text at a font size of 22 pixels and a line height
            of 40 pixels. The font color is, #292929.{" "}
            <a href="#">Links are underlined with a color of #292929</a>.
          </p>
        </div>
        <div style={headingExampleStyles} className="dg_sidebar">
          <span style={titleStyles}>
            Normal Paragraph - Sidebar (Right column on desktop)
          </span>
          <p>
            This is normal paragraph text. The font used for normal paragraph
            text is Montserrat at a font size of 16 pixels and a line height of
            30 pixels. The font color is, #292929.{" "}
            <a href="#">Links are underlined with a color of #292929</a>.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BodyExample;
