import React from 'react';
import PropTypes from 'prop-types';
import CheckedInput from './CheckedInput';

const Checkbox = (props) => <CheckedInput type="checkbox" {...props} />;

Checkbox.propTypes = {
	/** A unique identifier used to associate the checkbox with the label */
	id: PropTypes.string.isRequired,
	/** Name of the checkbox, this is important when grouping with other checkboxes */
	name: PropTypes.string.isRequired,
	/** A label to describe the associated checkbox */
	label: PropTypes.string.isRequired,
	/** String value to be associated with the given checkbox */
	value: PropTypes.string
};

export default Checkbox;
