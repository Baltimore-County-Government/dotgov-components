import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import button from "./Button";

const Model = props => {
  const { className, type = "button", text, content, icon } = props;
  const buttonCssClasses = classnames("dg_button", className);
  return (
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div>
            <div>
              {icon && <i className={`${icon}`} aria-hidden="true"></i>}
            </div>
            <div
              className="modal-body dg_model__context"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
