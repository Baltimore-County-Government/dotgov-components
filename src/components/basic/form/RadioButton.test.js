import React from 'react';
import ReactDOM from 'react-dom';
import RadioButton from './RadioButton';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<RadioButton id="favorite-colors" label="Blue" name="color" />, div);
	ReactDOM.unmountComponentAtNode(div);
});
