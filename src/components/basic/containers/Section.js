import React from 'react';
import classnames from 'classnames';

const Section = (props) => {
	const { className = '' } = props;
	const cssClasses = classnames('dg_section', className);
	return <section className={cssClasses}>{props.children}</section>;
};

export default Section;
