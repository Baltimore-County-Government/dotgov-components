import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
		<a href={href} className={cssClasses} {...rest} aria-label={description}>
			{TransparencyIcon}
			{text && <span>{text}</span>}
		</a>
	);
};

Transparency.propTypes = {
	/**  A text description of the action the icon provides. */
	description: PropTypes.string.isRequired,
	/** Html href property */
	href: PropTypes.string.isRequired,
	/** Font Awesome icon class */
	icon: PropTypes.string.isRequired,
	/** icon Text*/
	text: PropTypes.string,
	/** Visual type of the icon link, possible values are `rectangle` and `circle` */
	type: PropTypes.string
};

export default Transparency;
