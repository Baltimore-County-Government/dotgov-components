import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Checkbox id="favorite-colors" label="Blue" name="color" />, div);
	ReactDOM.unmountComponentAtNode(div);
});
