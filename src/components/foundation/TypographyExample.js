import React from 'react';
import Section from '../basic/containers/Section';

const headingExampleStyles = {
	borderTop: '1px solid lightgray',
	padding: '20px'
};

const titleStyles = {
	color: 'gray',
	display: 'block',
	marginBottom: '15px'
};

const TypographyExample = (props) => {
	return (
		<React.Fragment>
			<section className="example-section">
				<div style={headingExampleStyles}>
					<span style={titleStyles}>Heading 1</span>
					<h1>Montserrat 36px bold</h1>
				</div>
				<div style={headingExampleStyles}>
					<span style={titleStyles}>Heading 2</span>
					<h2>Montserrat 24px bold</h2>
				</div>
				<div style={headingExampleStyles}>
					<span style={titleStyles}>Heading 3</span>
					<h3>Montserrat 20px bold</h3>
				</div>
				<div style={headingExampleStyles}>
					<span style={titleStyles}>Heading 4-6</span>
					<h4>Montserrat 18px bold</h4>
				</div>
				<div style={headingExampleStyles} className="subpage">
					<span style={titleStyles}>Heading 2 - Subpage</span>
					<h2>Montserrat 24px bold</h2>
				</div>
				<div style={headingExampleStyles} className="sidebar">
					<span style={titleStyles}>Heading 2 - Sidebar (Right column on desktop)</span>
					<h2>Montserrat 16px bold</h2>
				</div>
			</section>
			<section className="example-section">
				<div style={headingExampleStyles}>
					<span style={titleStyles}>Normal Paragraph</span>
					<p>
						This is normal paragraph text. The font used for normal paragraph text is Crimson Text at a font
						size of 22 pixels and a line height of 40 pixels. The font color is, #333.{' '}
						<a href="#">Links are underlined with a color of #002280</a>.
					</p>
				</div>
				<div style={headingExampleStyles} className="sidebar">
					<span style={titleStyles}>Normal Paragraph - Sidebar (Right column on desktop)</span>
					<p>
						This is normal paragraph text. The font used for normal paragraph text is Crimson Text at a font
						size of 22 pixels and a line height of 40 pixels. The font color is, #333.{' '}
						<a href="#">Links are underlined with a color of #002280</a>.
					</p>
				</div>
			</section>
			<section className="example-section">
				<div style={headingExampleStyles}>
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
				<div style={headingExampleStyles} className="sidebar">
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
			<section className="example-section">
				<Section className="dark">
					<div style={headingExampleStyles}>
						<span style={titleStyles}>Heading 2</span>
						<h2>Montserrat 24px bold</h2>
					</div>
					<div style={headingExampleStyles}>
						<span style={titleStyles}>Heading 3</span>
						<h3>Montserrat 20px bold</h3>
					</div>
					<div style={headingExampleStyles}>
						<span style={titleStyles}>Heading 4-6</span>
						<h4>Montserrat 18px bold</h4>
					</div>
				</Section>
			</section>
		</React.Fragment>
	);
};

export default TypographyExample;
