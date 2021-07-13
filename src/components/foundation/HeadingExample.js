import React from "react";

const headingExampleStyles = {
  borderTop: "1px solid lightgray",
  padding: "20px",
};

const titleStyles = {
  color: "gray",
  display: "block",
  marginBottom: "15px",
};

const HeadingExample = (props) => {
  return (
    <React.Fragment>
      <section className="example-section">
        <div style={{ padding: "20px" }}>
          <span style={titleStyles}>Heading 1</span>
          <h1>Montserrat 36px bold</h1>
        </div>
        <div style={headingExampleStyles}>
          <span style={titleStyles}>Heading 2</span>
          <h2>Montserrat 30px bold</h2>
        </div>
        <div style={headingExampleStyles} className="subpage">
          <span style={titleStyles}>Heading 2 - Subpage</span>
          <h2>Montserrat 30px bold</h2>
        </div>
        <div style={headingExampleStyles} className="dg_sidebar">
          <span style={titleStyles}>
            Heading 2 - Sidebar (Right column on desktop)
          </span>
          <h2>Montserrat 16px bold</h2>
        </div>
        <div style={headingExampleStyles}>
          <span style={titleStyles}>Heading 3</span>
          <h3>Montserrat 24px bold</h3>
        </div>
        <div style={headingExampleStyles}>
          <span style={titleStyles}>Heading 4</span>
          <h4>Montserrat 18px bold</h4>
        </div>
        <div style={headingExampleStyles}>
          <span style={titleStyles}>Heading 5</span>
          <h5>Montserrat 14px bold</h5>
        </div>
        <div style={headingExampleStyles}>
          <span style={titleStyles}>Heading 6</span>
          <h6>Montserrat 12px bold</h6>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeadingExample;
