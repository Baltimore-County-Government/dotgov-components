import React from 'react';
import PropTypes from 'prop-types';

const Search = props =>
	<div style="width: 400px">
		<div class="input-group">
			<input class="form-control" type="text" placeholder="Search"></input>
			<span class="input-group-btn">
				<button class="btn btn-info btn-search"><i class="icon icon-inverse icon-search"></i></button>
			</span>
		</div>
	</div>;

Search.propTypes = {
	/** A description for the sites status i.e. BETA */
	status: PropTypes.string.isRequired,
};

export default Search

