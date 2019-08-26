import React from 'react';
import ReactDOM from 'react-dom';
import IconLink from './IconLink';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<IconLink href="#" icon="fas fa-star" description="Show a list of your favorite items." />, div);
	ReactDOM.unmountComponentAtNode(div);
});
