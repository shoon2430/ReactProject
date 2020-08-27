import React, { Component } from "react";
import { Link } from "react-router-dom";
import qs from "qs";
import { withRouter } from "react-router-dom";
import main from "../../data/category/main";
import sub from "../../data/category/sub";
import { inject, observer } from "mobx-react";

@withRouter
@inject("Store")
@observer
class CategoryLineContainer extends Component {
  list = this.props.Store.list;

  categoryDiv = (mainCategory, subCategory) => (
    <div>
      <Link to={`/list?category=${mainCategory.value}`}>
        》　{mainCategory.text}　-　
      </Link>
      <Link
        to={`/list?category=${mainCategory.value}&subCategory=${subCategory.value}`}
      >
        {subCategory.text}
      </Link>
    </div>
  );

  setMain = (obj) => {
    let mainObj = main.find((data) => data.value === obj.category);
    this.list.setMainCategory(mainObj.value);
    this.list.setMainCategoryMakeList();
    return mainObj;
  };
  setSub = (obj) => {
    var subObj = {};
    subObj = sub.find((data) => data.value === obj.subCategory);
    this.list.setSubCategory(subObj.value);
    this.list.setSubCategoryMakeList();
    return subObj;
  };

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
      // console.log("메인o 서브x id x search o");
      mainCategory = this.setMain(urlParams);
      return (
        <div>
          <Link to={`/list?category=${mainCategory.value}`}>
            》　{mainCategory.text}
          </Link>
          　-　"{urlParams.search}"　검색
        </div>
      );
    } else if (!urlParams.category && !urlParams.subCategory && urlParams.id) {
      // console.log("메인 x 서브x 아이디o");
      let item = this.props.Store.detail.getSelectItem;
      mainCategory = this.setMain(item);
      subCategory = this.setSub(item);
      return this.categoryDiv(mainCategory, subCategory);
    } else if (urlParams.category && urlParams.subCategory && !urlParams.id) {
      // console.log("메인o 서브o id x");
      mainCategory = this.setMain(urlParams);
      subCategory = this.setSub(urlParams);
      return this.categoryDiv(mainCategory, subCategory);
    } else if (urlParams.category && !urlParams.subCategory && !urlParams.id) {
      // console.log("메인o 서브x id x");
      mainCategory = this.setMain(urlParams);

      return (
        <div>
          <Link to={`/list?category=${mainCategory.value}`}>
            》　{mainCategory.text}
          </Link>
        </div>
      );
    }
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
