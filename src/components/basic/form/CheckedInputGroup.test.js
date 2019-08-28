import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';
import CheckedInputGroup from './CheckedInputGroup';

it('renders checkboxes without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<CheckedInputGroup heading="What are your favorite color(s)?">
			<Checkbox id="color-blue" name="favorite-color" label="Blue" />
			<Checkbox id="color-red" name="favorite-color" label="Red" />
		</CheckedInputGroup>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders radio buttons without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<CheckedInputGroup heading="What are your favorite color(s)?">
			<RadioButton id="color-blue" name="favorite-color" label="Blue" />
			<RadioButton id="color-red" name="favorite-color" label="Red" />
		</CheckedInputGroup>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
