import React from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';

const Select = (props) => {
	const { id, label, options, hint, errors, ...otherProps } = props;
	return (
		<FormField id={id} label={label} hint={hint}>
			<select id={id} {...otherProps} className="dg_form-field-select">
				<option value="">{`- ${label} -`}</option>
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
			{/* {error && <div className="">{error}</div>} */}
		</FormField>
	);
};

Select.propTypes = {
	/** A unique identifier used to associate the Select with the label */
	id: PropTypes.string.isRequired,
	/** Only when absolutely necessary, adds text to help the user fill out a Select */
	hint: PropTypes.string,
	/** A label to describe the associated Select */
	label: PropTypes.string.isRequired
};

export default Select;
