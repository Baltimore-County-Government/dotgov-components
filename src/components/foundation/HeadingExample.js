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

const HeadingExample = (props) => {
	return (
		<React.Fragment>
			<section className="example-section">
				<div style={{ padding: '20px' }}>
					<span style={titleStyles}>Heading 1</span>
					<h1>Montserrat 36px bold</h1>
				</div>
				<div style={headingExampleStyles}>
					<span style={titleStyles}>Heading 2</span>
					<h2>Montserrat 24px bold</h2>
				</div>
				<div style={headingExampleStyles} className="subpage">
					<span style={titleStyles}>Heading 2 - Subpage</span>
					<h2>Montserrat 24px bold</h2>
				</div>
				<div style={headingExampleStyles} className="sidebar">
					<span style={titleStyles}>Heading 2 - Sidebar (Right column on desktop)</span>
					<h2>Montserrat 16px bold</h2>
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

export default HeadingExample;
