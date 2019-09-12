import React from 'react';
import ReactDOM from 'react-dom';
import SectionTransparency from './SectionTransparency';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SectionTransparency href="#" icon="fa fa-bullhorn" description="Visit our users dashboard to learn more." />, div);
	ReactDOM.unmountComponentAtNode(div);
});
