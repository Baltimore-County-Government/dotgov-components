import React from 'react';
import PropTypes from 'prop-types';

const CheckedInput = (props) => {
	const { cssNamespace = 'dg', cssClass, id, name, type, value, label, ...otherProps } = props;
	const componentClassName = `${cssNamespace}_${type.toLowerCase()}`;
	return (
		<div className={componentClassName}>
			<input
				className={`${componentClassName}-input`}
				id={id}
				name={name}
				type={type}
				value={value}
				{...otherProps}
			/>
			<label className={`dg_label ${componentClassName}-label`} htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

CheckedInput.propTypes = {
	/** Prefix for checked component css class  */
	cssNamespace: PropTypes.string,
	/** Identified for the input */
	cssClass: PropTypes.string.isRequired,
	/** Either radio or checkbox */
	type: PropTypes.string.isRequired,
	/** A unique identifier used to associate the checkbox with the label */
	id: PropTypes.string.isRequired,
	/** Name of the checkbox, this is important when grouping with other checkboxes */
	name: PropTypes.string.isRequired,
	/** A label to describe the associated checkbox */
	label: PropTypes.string.isRequired,
	/** String value to be associated with the given checkbox */
	value: PropTypes.string
};

export default CheckedInput;
