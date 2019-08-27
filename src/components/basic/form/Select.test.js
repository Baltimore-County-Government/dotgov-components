import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';

const options =[
	{
		id:1,name:'Blue'
	},
	{
		id:2,name:'Red'
	},
	{
		id:3,name:'Yellow'
	},
	{
		id:4,name:'Gray'
	}];
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Select id="select-items" label="Favorite Colors" options={options}/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
