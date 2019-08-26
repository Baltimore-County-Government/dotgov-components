import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
