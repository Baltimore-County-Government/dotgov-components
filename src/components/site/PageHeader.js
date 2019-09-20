import React from 'react';
import PropTypes from 'prop-types';


const PageHeader = (props) => (
	<div className="dg_page-header">
		<div className="dg_page-header__box ">
			<div className="col-12 col-lg-5 col-xl-6">
				<span className="dg_page-header__PreTitle">{props.preTitle !== undefined ? props.preTitle : null}</span>
				<span className="dg_page-header__Title">{props.Title} </span>
			</div>
			<div className="col-12 col-lg-7 col-xl-6">
				<p>{props.Deck !== undefined ? props.Deck : null}</p>
			</div>
		</div>
	</div>
);

PageHeader.propTypes = {
	/** PreTitle to be displayed */
	preTitle: PropTypes.string,
	/** Title to be displayed */
	Title: PropTypes.string.isRequired,
	/** Deck to be displayed */
	Deck: PropTypes.string
};

export default PageHeader;
