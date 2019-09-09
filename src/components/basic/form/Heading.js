import React from 'react';
import PropTypes from 'prop-types';

const headingExampleStyles = {
	borderTop: '1px solid lightgray',
	padding: '20px'
};

const titleStyles = {
	color: 'gray',
	display: 'block',
	marginBottom: '15px'
};

const Heading = (props) => {

	return (
        <React.Fragment>
        <div style={headingExampleStyles}>
					<span style={titleStyles}>Heading 2</span>
					<h2>Montserrat 24px bold</h2>
				</div>
	
        </React.Fragment>
    
	);
};
