import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';

const TextInput = (props) => {
	const [ error, setError ] = useState('');
	const { id, hint, label, validate, type = "text", ...otherProps } = props;

	return (
		<FormField id={id} hint={hint} label={label} error={error}>
			<input id={id} className="dg_form-field_input--text" type={type} {...otherProps} />
		</FormField>
	);
};

TextInput.propTypes = {
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

export default TextInput;
