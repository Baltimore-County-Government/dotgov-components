import React from "react";

const Search = props => (
  <form className="dg_search-container" id="search-form">
    <label for="main-search" className="visuallyhidden">
      Search:
    </label>
    <input
      className="dg_search-input"
      id="main-search"
      type="text"
      placeholder="Search for services and more..."
      autoComplete="off"
    ></input>
    <button className="dg_search-btn" type="submit">
      <i className="fas fa-search" aria-hidden="true"></i>
    </button>
  </form>
);

export default Search;
