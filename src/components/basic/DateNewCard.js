import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DataNewCard = (props) => (
	<div className="dg_news-content">
		<span>{props.month}</span>
		<span>{props.day}</span>
	</div>
);

export default DataNewCard;
