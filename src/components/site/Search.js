import React from "react";

const Search = (props) => (
  <form className="dg_search-container" id="search-form">
    <label htmlFor="main-search" className="visuallyhidden">
      Search:
    </label>
    <div className="gcse-searchbox-only"></div>
    <button className="dg_search-btn" type="submit">
      <i className="fas fa-search" aria-hidden="true"></i>
    </button>
  </form>
);

export default Search;
