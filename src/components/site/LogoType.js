import React from 'react';

const LogoType = props => 
<div class="logotype">
    <a href="#">
        <h1 class="logotype">
            <span>{props.LogoHeader}</span>
            <span>{props.LogoText}</span>
        </h1>
    </a>
</div>;

export default LogoType