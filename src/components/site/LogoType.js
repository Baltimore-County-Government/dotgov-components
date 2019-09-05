import React from 'react';

const LogoType = props => 
<div className="logotype">
    <a href="#">
        <h1>
            <span>{props.LogoHeader}</span>
            <span>{props.LogoText}</span>
        </h1>
    </a>
</div>;

export default LogoType