import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';

describe('Text Input', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Section>
				<p>Some content goes here</p>
			</Section>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
