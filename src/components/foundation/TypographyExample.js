import React from 'react';

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
			<h2>Default</h2>
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
			</section>
			<h2>Subpage</h2>
			<section className="example-section subpage">
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
			</section>
		</React.Fragment>
	);
};

export default TypographyExample;
