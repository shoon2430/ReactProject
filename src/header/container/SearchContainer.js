import React, { Component } from "react";
import SearchView from "../view/SearchView";
import { inject, observer } from "mobx-react";
import allData from "../../data/allData";

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
    console.log(">>>>>", this.state.selectOption);
  };
  onInputText = (e) => {
    console.log("-----");
    this.setState({
      inputText: e.target.value,
    });
    console.log("-----", this.state.inputText);
  };
  onSearch = () => {
    console.log("onsearch");
    let list = [];

    if (this.state.selectOption === "") {
      list = allData.filter((data) => data.name.match(this.state.inputText));
    } else if (this.state.selectOption !== "") {
      list = allData.filter(
        (data) =>
          data.category === this.state.selectOption &&
          data.name.match(this.state.inputText)
      );
    }

    console.log("onsearch--", this.state.selectOption, this.state.inputText);
    console.log("DATA----->", list);

    let url = "/list?search=";
    url += this.state.inputText ? this.state.inputText : "";
    url += this.state.selectOption
      ? `&category=${this.state.selectOption}`
      : "";

    window.location = url;

    return list;
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
