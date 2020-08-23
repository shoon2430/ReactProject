import React, { Component } from "react";
import SearchView from "../view/SearchView";
import { inject, observer } from "mobx-react";
import main from "../../data/category/main";

@inject("Store")
@observer
class SearchContainer extends Component {
  state = {
    inputText: "",
    selectOption: "",
    optName: "전체",
  };

  selectOpt = (value, name) => {
    this.setState({
      selectOption: value,
      optName: name,
    });
  };

  onInputText = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  onSearch = () => {
    if (!this.state.inputText) {
      alert("검색어를 입력해주세요!");
      return;
    }

    let url = "/list?search=";
    url += this.state.inputText ? this.state.inputText : "";
    url += this.state.selectOption
      ? `&category=${this.state.selectOption}`
      : "";

    window.location = url;
  };

  render() {
    main.unshift({ key: 0, text: "전체", value: "" });
    return (
      <SearchView
        mainCategoryList={main}
        onSearch={this.onSearch}
        onInputText={this.onInputText}
        selectOpt={this.selectOpt}
        optName={this.state.optName}
      />
    );
  }
}

export default SearchContainer;
