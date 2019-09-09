import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
//import Transparency from './Transparency';
const headingExampleStyles = {
	borderTop: '1px solid lightgray',
	padding: '20px'
};

const titleStyles = {
	color: 'gray',
	display: 'block',
	marginBottom: '15px'
};

const Transparency = (props) => {
	const defaultSize = 'large';
	const { icon, href, description, size = defaultSize, type = '', text, className, ...rest } = props;
	const cssClasses = classnames(
		'dg_icon-link',
		`dg_icon-link--${size}`,
		type ? `dg_icon-link--${type}` : null,
		className
	);
	const iconCssClasses = classnames('dg_icon', icon);
	const TransparencyIcon = icon ? <i aria-hidden="true" className={iconCssClasses} /> : null;
	return (
        <React.Fragment>
        <div style={headingExampleStyles}>
					<span style={titleStyles}>Heading 2</span>
					<h2>Montserrat 24px bold</h2>
				</div>
		<a href={href} className={cssClasses} {...rest} aria-label={description}>
		
			{TransparencyIcon}
			{text && <span>{text}</span>}
		</a>
        </React.Fragment>
    
	);
};

export default Transparency;
