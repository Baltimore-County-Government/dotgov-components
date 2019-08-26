import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const IconLink = (props) => {
	const sizes = {
		large: '100px',
		small: '50px'
	};
	const defaultSize = 'large';
	const { icon, description, size = defaultSize, text, className, ...rest } = props;
	const cssClasses = classnames('dg_icon-link', `dg_icon-link--${size}`, className);
	const iconCssClasses = classnames('dg_icon', icon, size.toLowerCase() === defaultSize ? 'fa-2x' : 'fa-1x');
	const iconSize = size === defaultSize ? size : 'small';
	const linkIcon = icon ? (
		<i
			aria-hidden="true"
			className={iconCssClasses}
			style={{
				width: sizes[iconSize],
				height: sizes[iconSize]
			}}
		/>
	) : null;

	return (
		<a className={cssClasses} {...rest} aria-label={description}>
			{linkIcon}
			{text && <span>{text}</span>}
		</a>
	);
};

IconLink.propTypes = {
	/**  A text description of the action the button provides. */
	description: PropTypes.string.isRequired,
	/** Html href property */
	href: PropTypes.string.isRequired,
	/** Font Awesome icon class */
	icon: PropTypes.string.isRequired,
	/** Button Text*/
	text: PropTypes.string
};

export default IconLink;
