import React from 'react';

const SiteStatus = props => <p><span className="dg_status-text">{props.status}</span></p>;

SiteStatus.propTypes = {
	/** A description for the sites status i.e. BETA */
	status: PropTypes.string.isRequired,
};

export default SiteStatus