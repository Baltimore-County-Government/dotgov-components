import React from 'react';

const LogoType = props => 
<div className="dg_logotype">
    <a href="#">
        <h1>
            <span>{props.header}</span>
            <span>{props.description}</span>
        </h1>
    </a>
</div>;

LogoType.propTypes = {
	/** A header for the logo i.e. vender name or Baltimore County */
	header: PropTypes.string.isRequired,
	/** Adds a description to the logo i.e. vendor catch phrase or Government */
	description: PropTypes.string.isRequired,
};

export default LogoType