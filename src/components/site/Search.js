import React from "react";
import PropTypes from "prop-types";

const Search = props => (
  <form className="dg_search-container" id="search-bar">
    <input
      className="dg_txt-field-cnty"
      id="main-search"
      type="text"
      placeholder="Search for services and more..."
    ></input>
    <button className="dg_cnty-srch-btn" type="submit">
      <i class="fas fa-search" aria-hidden="true"></i>
    </button>
  </form>
);

export default Search;
