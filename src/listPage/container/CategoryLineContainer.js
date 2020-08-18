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
    if (urlParams.category === "" || urlParams.category === undefined) {
      return "》　전체검색";
    } else {
    }
    mainCategory = main.find((data) => data.value === urlParams.category);
    this.props.Store.list.setMainCategory(mainCategory.value);
    this.props.Store.list.setMainCategoryMakeList();

    console.log(
      "makelist main after",
      this.props.Store.list.resultList.slice("")
    );

    var subCategory = this.getSubCategoryTitle(urlParams);
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
        {/* <hr />
       

        <span style={{ fontWeight: "bold" }} href="">
          》　{this.setMainCategoryTitle(urlParams)}　-　
        </span>
        <span>{this.setSubCategoryTitle(urlParams)}</span>
        {/* 서브카테고리를 클릭했을때 카테고리 리스트페이지로 넘어오기떄문에
                서브카테고리코드를 URL로 받아서 카테고리라인에 넣어야한다.*/}

        {this.setCategoryLine(urlParams)}
      </div>
    );
  }
}

export default CategoryLineContainer;
