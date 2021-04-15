import React from "react";
import PropTypes from "prop-types";

const AlternateListItem = (props) => {
  const { link, linkText, className } = props;

  const handlesAlternateListItemOnClick = (elem) => {
    var list = document.getElementsByClassName("dg_alt-list");
    var currentListItem = elem.target;

    if (currentListItem.tagName.toLowerCase() != "li") {
      currentListItem = currentListItem.parentNode;
    }

    list.forEach((item) => {
      var listItem = item.getElementsByTagName("li");
      console.log(listItem);
      listItem.forEach((x) => {
        if (x === currentListItem) {
          x.className = "dg_alt-list-current";
        } else {
          x.className = "";
        }
      });
    });
  };

  return (
    <li onClick={handlesAlternateListItemOnClick} className={className}>
      <a href={link}>{linkText}</a>
    </li>
  );
};

AlternateListItem.propTypes = {
  /** The link or href for the a tag */
  link: PropTypes.string.isRequired,
  /** The copy that exists inside the a tag */
  linkText: PropTypes.string.isRequired,
};

export default AlternateListItem;
