import React, { Component } from "react";
import SearchView from "../view/SearchView";

class SearchContainer extends Component {
  state = {
    inputText: "",
  };
  onInputText = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  render() {
    return <SearchView onSearch={this.onSearch} onInputText={this.onInputText}/>;
  }
}

export default SearchContainer;
