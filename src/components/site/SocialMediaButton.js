import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SocialMediaButton = (props) => {
  const { title, className, href, id, content, icon, onClick, target } = props;
  const cssClassNames = classnames("dg_Button", className);
  const actionClass = classnames("action", icon);

  return (
    <div className="dg_actions-list">
      <ul>
        <li className={actionClass}>
          <a
            id={id}
            className={cssClassNames}
            title={title}
            target={target}
            href={href}
            onClick={onClick}
          >
            {content}
          </a>
        </li>
      </ul>
    </div>
  );
};

SocialMediaButton.propTypes = {
  /** id for the button */
  id: PropTypes.string.isRequired,
  /** hover title for the button */
  title: PropTypes.string.isRequired,
  /** classes for the button */
  className: PropTypes.string.isRequired,
  /** href to the social media site. This should come from the actual social media companies development page */
  href: PropTypes.string.isRequired,
  /** name of the button*/
  content: PropTypes.string.isRequired,
  /** social media icon i.e. twitter bird, facebook F*/
  icon: PropTypes.string.isRequired,
  /** some social media buttons require a click event such as facebook. This would be described on their development page*/
  onClick: PropTypes.string,
  /** some social media buttons require a target such as facebook. This would be described on their development page*/
  target: PropTypes.string,
};

export default SocialMediaButton;
