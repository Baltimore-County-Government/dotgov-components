import React from 'react';
import PropTypes from 'prop-types';

const CheckedInputGroup = (props) => {
	const { heading, hint, describedBy, children } = props;

	return (
		<fieldset className="dg_fieldset" aria-describedby={describedBy}>
			<legend className="dg_fieldset-legend">
				<h1 className="dg_fieldset-heading">{heading}</h1>
			</legend>
			{hint && (
				<span id={describedBy} className="dg_fieldset-hint">
					{hint}
				</span>
			)}
			{children}
		</fieldset>
	);
};

CheckedInputGroup.propTypes = {
	/** Title to describe the purpose of the group */
	heading: PropTypes.string.isRequired,
	/** Only when absolutely necessary, adds text to help the user fill out a field, ex Password Requirements */
	hint: PropTypes.string,
	/** aria-describedby attribute to associated fieldset to the hint */
	describedBy: PropTypes.string
};

export default CheckedInputGroup;
