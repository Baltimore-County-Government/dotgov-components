import React from 'react';

const exampleBoxStyles = {
	background: '#e0e0e0',
	padding: '20px 40px',
	margin: '10px auto'
};

const ExampleRow = (props) => {
	const { numberOfColumns = 3 } = props;
	const arr = Array.from({ length: numberOfColumns }, (v, k) => k + 1);
	return (
		<div className="row">
			{arr.map((col) => (
				<div key={col} className="col-sm">
					<p style={exampleBoxStyles}>
						Column {col} of {arr.length} columns
					</p>
				</div>
			))}
		</div>
	);
};

const GridExample = () => (
	<div className="container">
		<ExampleRow numberOfColumns={3} />
		<ExampleRow numberOfColumns={4} />
	</div>
);

export default GridExample;
