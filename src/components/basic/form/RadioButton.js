import React from 'react';
import PropTypes from 'prop-types';
import CheckedInput from './CheckedInput';

const RadioButton = (props) => <CheckedInput type="radio" {...props} />;

RadioButton.propTypes = {
	/** A unique identifier used to associate the radio button with the label */
	id: PropTypes.string.isRequired,
	/** Name of the radio button, this is important when grouping with other radio buttons */
	name: PropTypes.string.isRequired,
	/** A label to describe the associated radio button */
	label: PropTypes.string.isRequired,
	/** String value to be associated with the given radio button */
	value: PropTypes.string
};

export default RadioButton;
