import React from 'react';
import Section from '../basic/containers/Section';

const headingExampleStyles = {
	borderTop: '1px solid lightgray',
	padding: '20px'
};

const titleStyles = {
	color: 'white',
	display: 'block',
	marginBottom: '15px'
};

const DarkHeadingExample = () => (
	<React.Fragment>
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

export default DarkHeadingExample;
