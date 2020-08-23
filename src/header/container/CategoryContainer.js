import React, { Component } from "react";
import MainCategoryView from "../view/MainCategoryView";
import main from "../../data/category/main";
import sub from "../../data/category/sub";

class CategoryContainer extends Component {
  render() {
    return <MainCategoryView MainCategorys={main} subCategorys={sub} />;
  }
}

export default CategoryContainer;
