import React from 'react';
import ReactDOM from 'react-dom';
import NewsRoom from './NewsRoom';
import DateNewsCard from './DateNewsCard';

it('renders checkboxes without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<NewsRoom>
			<DateNewsCard
				date="07/29/2019"
				headline="Baltimore County Marks Progress in Rehabilitation of Winters lane Homes"
				snippet="Today Baltimore County officials joined with community and..."
				link="//www.baltimorecountymd.gov/News/BaltimoreCountyNow"
			/>
		</NewsRoom>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
