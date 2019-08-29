import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Checkbox id="favorite-colors" label="Blue" name="color" value="blue" />, div);
	ReactDOM.unmountComponentAtNode(div);
});
