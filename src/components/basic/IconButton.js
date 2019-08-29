import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const IconButton = (props) => {
    const defaultSize = 'large';
    const { icon, href, type, description, size = defaultSize, text, className, ...rest } = props;
    const focusType = type === 'Default' ? "" : "focused";
    const classType = type === 'Default' ? "dg_icon-buttonDefault" : "dg_icon-buttonAlternative";
    const cssClasses = classnames(`${classType}`, `${classType}--${size}`, className);
    const iconCssClasses = classnames('dg_icon', icon);
    const linkIcon = icon ? <i aria-hidden="true" className={iconCssClasses} /> : null;
    const navigationLink = href ? href : `javascript:void(0);`;
    return (

        <a href={navigationLink} className={cssClasses} {...rest} aria-label={description}>
            <div className={focusType}>
                {linkIcon}
                {text && <span>{text}</span>}
            </div>
        </a>

    );
};

IconButton.propTypes = {
    /**  A text description of the action the button provides. */
    description: PropTypes.string.isRequired,
    /** Html href property */
    href: PropTypes.string.isRequired,
    /** Font Awesome icon class */
    icon: PropTypes.string.isRequired,
    /** Button Text*/
    text: PropTypes.string,
    /** Type of button:Default or Alternative */
    type: PropTypes.string.isRequired
};

export default IconButton;
