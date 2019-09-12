import React from 'react';
import PropTypes from 'prop-types';
import IconHeading from '../basic/IconHeading';

const NewsRoom = (props) => (
	<div>
		<div>
			<IconHeading text="LATEST HEADLINES" icon="fa fa-newspaper" />
		</div>
		<div>{props.children}</div>
	</div>
);
NewsRoom.propTypes = {
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

export default NewsRoom;