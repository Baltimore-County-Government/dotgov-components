import React from 'react';
import PropTypes from 'prop-types';
import IconHeading from '../basic/IconHeading';

const SectionTransparency = (props) => (
	<div>
		<div>
			<IconHeading text="TRANSPARENCY" icon="fa fa-search-plus" />
		</div>
		<div>{props.children}</div>
	</div>
);
SectionTransparency.propTypes = {
	/**  A text description of the action the icon provides. */
	description: PropTypes.string.isRequired,
	/** Html href property */
	href: PropTypes.string.isRequired,
	/** Font Awesome icon class */
	icon: PropTypes.string.isRequired,
	/** icon Text*/
	text: PropTypes.string,
	/** Visual type of the icon link, possible values are `rectangle` and `circle` */
	type: PropTypes.string
};

export default SectionTransparency;
