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
export default SectionTransparency;
