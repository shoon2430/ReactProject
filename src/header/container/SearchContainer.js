import React, { Component } from "react";
import SearchView from "../view/SearchView";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class SearchContainer extends Component {
  state = {
    inputText: "",
    selectOption: "",
  };

  selectOpt = (value) => {
    this.setState({
      selectOption: value,
    });
  };

  onInputText = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  onSearch = () => {
    let url = "/list?search=";
    url += this.state.inputText ? this.state.inputText : "";
    url += this.state.selectOption
      ? `&category=${this.state.selectOption}`
      : "";

    window.location = url;
  };

  render() {
    return (
      <SearchView
        onSearch={this.onSearch}
        onInputText={this.onInputText}
        selectOpt={this.selectOpt}
      />
    );
  }
}

export default SearchContainer;
