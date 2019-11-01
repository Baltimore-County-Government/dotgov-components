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

const LinksExample = props => {
  return (
    <React.Fragment>
      <section className="example-section">
        <div style={{ padding: "20px" }}>
          <span style={titleStyles}>Normal Link</span>
          <a href="#">Link Default</a>
          <br />
          <a href="#" className="hovered">
            Link Hover
          </a>
          <br />
          <a href="#" className="active">
            Link Active
          </a>
          <br />
          <a href="#" className="focused">
            Link Focus
          </a>
          <br />
          <a href="#" className="disabled">
            Link Disabled
          </a>
        </div>
        <div style={headingExampleStyles} className="dg_sidebar">
          <span style={titleStyles}>
            Normal Link - Sidebar (Right column on desktop)
          </span>
          <a href="#">Link Default</a>
          <br />
          <a href="#" className="hovered">
            Link Hover
          </a>
          <br />
          <a href="#" className="active">
            Link Active
          </a>
          <br />
          <a href="#" className="focused">
            Link Focus
          </a>
          <br />
          <a href="#" className="disabled">
            Link Disabled
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LinksExample;
