import React from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';

const TextArea = (props) => {
	const { id, label, hint, ...otherProps } = props;
	return (
		<FormField id={id} label={label} hint={hint}>
			<textarea className="dg_form-field_textarea" id={id} {...otherProps} />
		</FormField>
	);
};

TextArea.propTypes = {
	/** A unique identifier used to associate the textarea with the label */
	id: PropTypes.string.isRequired,
	/** Only when absolutely necessary, adds text to help the user fill out a textarea */
	hint: PropTypes.string,
	/** A label to describe the associated textarea */
	label: PropTypes.string.isRequired
};

export default TextArea;
