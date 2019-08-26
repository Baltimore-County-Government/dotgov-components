import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';

const Checkbox = (props) => {
	const { id, name, value, label, ...otherProps } = props;

	return (
		<div className="dg_checkbox">
			<input className="dg_checkbox-input" id={id} name={name} type="checkbox" value={value} {...otherProps} />
			<label className="dg_label dg_checkbox-label" for={id}>
				{label}
			</label>
		</div>
	);
};

Checkbox.propTypes = {
	/** A unique identifier used to associate the input with the label */
	id: PropTypes.string.isRequired,
	/** Only when absolutely necessary, adds text to help the user fill out a field, ex Password Requirements */
	hint: PropTypes.string,
	/** A label to describe the associated text input */
	label: PropTypes.string.isRequired,
	/** Default input placeholder attribute  */
	placeholder: PropTypes.string,
	/** The type of text input you want to use, possible values are 'text', 'email', 'url' */
	type: PropTypes.string,
	/** Function that will validate the field */
	validate: PropTypes.func
};

export default Checkbox;
