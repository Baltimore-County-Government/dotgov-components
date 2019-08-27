import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';

const options =[{id:1,name:'published'},{id:2,name:'updated'},{id:3,name:'views'},{id:4,name:'comments'}];
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Select id="select-items" label="Select from the list" options={options}/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
