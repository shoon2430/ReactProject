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
  categoryDiv = (mainCategory, subCategory) => (
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

  setCategoryLine = (urlParams) => {
    var mainCategory = {};
    var subCategory = {};
    if (
      !urlParams.category &&
      !urlParams.subCategory &&
      !urlParams.id &&
      !urlParams.search
    ) {
      // console.log("메인x 서브x id x");
      return "》　전체검색";
    } else if (
      !urlParams.category &&
      !urlParams.subCategory &&
      !urlParams.id &&
      urlParams.search
    ) {
      // console.log("메인x 서브x id x search o");
      return "》　[" + urlParams.search + "]　검색";
    } else if (
      urlParams.category &&
      !urlParams.subCategory &&
      !urlParams.id &&
      urlParams.search
    ) {
      // console.log("메인x 서브x id x search o");
      mainCategory = main.find((data) => data.value === urlParams.category);
      this.props.Store.list.setMainCategory(mainCategory.value);
      this.props.Store.list.setMainCategoryMakeList();

      return (
        <div>
          <a href={`/list?category=${mainCategory.value}`}>
            》　{mainCategory.text}
          </a>
          　-　"{urlParams.search}"　검색
        </div>
      );
    } else if (!urlParams.category && !urlParams.subCategory && urlParams.id) {
      // console.log("메인 x 서브x 아이디o");
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
      return this.categoryDiv(mainCategory, subCategory);
    } else if (urlParams.category && urlParams.subCategory && !urlParams.id) {
      // console.log("메인o 서브o id x", urlParams);
      mainCategory = main.find((data) => data.value === urlParams.category);
      this.props.Store.list.setMainCategory(mainCategory.value);
      this.props.Store.list.setMainCategoryMakeList();

      subCategory = this.getSubCategoryTitle(urlParams);
      this.props.Store.list.setSubCategory(subCategory.value);
      this.props.Store.list.setSubCategoryMakeList();

      return this.categoryDiv(mainCategory, subCategory);
    } else if (urlParams.category && !urlParams.subCategory && !urlParams.id) {
      // console.log("메인o 서브x id x");
      mainCategory = main.find((data) => data.value === urlParams.category);
      this.props.Store.list.setMainCategory(mainCategory.value);
      this.props.Store.list.setMainCategoryMakeList();
      return (
        <div>
          <a href={`/list?category=${mainCategory.value}`}>
            》　{mainCategory.text}
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
