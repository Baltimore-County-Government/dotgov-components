import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<CheckboxGroup heading="What are your favorite color(s)?">
			<Checkbox id="color-blue" name="favorite-color" label="Blue" />
			<Checkbox id="color-red" name="favorite-color" label="Red" />
		</CheckboxGroup>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
