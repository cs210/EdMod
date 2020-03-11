import React, { Component } from "react";
import 
{ IconButton, 
 InputAdornment,
FormControl,
InputLabel,
Input} 
from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

/*
add QA threads to filter:
  1. dummy data
  2. results UI
  3. filtering (state, etc.)
*/
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div>
       <FormControl variant="outlined">
          <Input
            id="SearchBar"
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
            startAdornment={<InputAdornment position="start">
            <IconButton>
            <SearchIcon/>
            </IconButton>
            </InputAdornment>}
          />
      </FormControl>
      </div>
    );
  }
}
