import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import ListItem from './ListItem';

it('renders an `ul` without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<List>
			<ListItem>Item 1</ListItem>
		</List>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders an `ol` without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<List type="ordered">
			<ListItem>Item 1</ListItem>
		</List>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
