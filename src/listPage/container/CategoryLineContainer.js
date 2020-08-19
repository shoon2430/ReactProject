import React, { Component } from "react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import main from "../../data/category/main";
import sub from "../../data/category/sub";
import { inject, observer } from "mobx-react";

@withRouter
@inject("Store")
@observer
class CategoryLineContainer extends Component {
  setCategoryLine = (urlParams) => {
    var mainCategory = {};
    var subCategory = {};
    if (
      (urlParams.category === "" || urlParams.category === undefined) &&
      (urlParams.id === "" || urlParams.id === undefined)
    ) {
      return "》　전체검색";
    } else if (urlParams.id !== "" && urlParams.id !== undefined) {
      let item = this.props.Store.detail.getSelectItem;
      let code = item.category; //"CATCLO"
      mainCategory = main.find((data) => data.value === code);
      this.props.Store.list.setMainCategory(mainCategory.value);
      this.props.Store.list.setMainCategoryMakeList();
      subCategory = this.getSubCategoryTitle(item);
      if (subCategory) {
        this.props.Store.list.setSubCategory(subCategory.value);
        this.props.Store.list.setSubCategoryMakeList();
      }
      return (
        <div>
          <a href={`/list?category=${mainCategory.value}`}>
            》　{mainCategory.text}　-　
          </a>
          <a
            href={`/list?category=${mainCategory.value}&subCategory=${subCategory.value}`}
          >
            {subCategory.text}
          </a>
        </div>
      );
    } else if (
      urlParams.category !== "" &&
      urlParams.category !== undefined &&
      (urlParams.id === "" || urlParams.id === undefined)
    ) {
      mainCategory = main.find((data) => data.value === urlParams.category);
      this.props.Store.list.setMainCategory(mainCategory.value);
      this.props.Store.list.setMainCategoryMakeList();

      subCategory = this.getSubCategoryTitle(urlParams);
      if (subCategory) {
        this.props.Store.list.setSubCategory(subCategory.value);
        this.props.Store.list.setSubCategoryMakeList();
      }
      return (
        <div>
          <a href={`/list?category=${mainCategory.value}`}>
            》　{mainCategory.text}　-　
          </a>
          <a
            href={`/list?category=${mainCategory.value}&subCategory=${subCategory.value}`}
          >
            {subCategory.text}
          </a>
        </div>
      );
    }
  };
  getSubCategoryTitle = (urlParams) => {
    var subObj = {};
    subObj = sub.find((data) => data.value === urlParams.subCategory);
    this.props.Store.list.setSubCategory(subObj.value);
    return subObj;
  };

  render() {
    const urlParams = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    return (
      <div
        style={{
          background: "#f5eadf",
          padding: "0.5em",
          fontWeight: "bold",
          marginTop: "5px",
        }}
      >
        {this.setCategoryLine(urlParams)}
      </div>
    );
  }
}

export default CategoryLineContainer;
