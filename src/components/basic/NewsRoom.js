import React from 'react';
import IconHeading from '../basic/IconHeading';

const NewsRoom = (props) => (
	<div>
		<div>
			<IconHeading text="LATEST HEADLINES" icon="fa fa-newspaper" />
		</div>
		<div>{props.children}</div>
	</div>
);

export default NewsRoom;
