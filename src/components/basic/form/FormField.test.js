import React from 'react';
import ReactDOM from 'react-dom';
import FormField from './FormField';

describe('Form Field', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<FormField id="problem-description" label="Describe your problem">
				<input type="text" id="problem-description" />
			</FormField>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

