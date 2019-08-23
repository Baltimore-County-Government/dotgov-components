import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = (props) => {
	const { icon, className, type = 'button', text } = props;
	const buttonCssClasses = classnames('dg_button', className);
	const iconCssClasses = classnames('dg_button_icon', icon);
	const buttonIcon = icon ? <i className={iconCssClasses} /> : null;
	return (
		<button type={type} className={buttonCssClasses}>
			{buttonIcon}
			{text}
		</button>
	);
};

Button.propTypes = {
	/** Button Text */
	text: PropTypes.string.isRequired,
	/** Font Awesome icon class */
	icon: PropTypes.string,
	/** Button Type - either `button`, `submit`, `reset` */
	type: PropTypes.string
};

export default Button;
