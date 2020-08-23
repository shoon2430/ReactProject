import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RecommendBestDiscountView from "../view/RecommendBestDiscountView";
import sub from "../../data/category/sub";
import RecommendSameSubCateListView from "../view/RecommendSameSubCateListView";

@inject("Store")
@observer
class RecommendContainer extends Component {
  render() {
    const { detail, item } = this.props.Store;
    const bestDiscount = item.getCateDiscountItems;
    const { selectItem } = this.props.Store.detail;

    const subCateObj = sub.find(
      (data) => data.value === selectItem.subCategory
    );

    const subCateText = { ...subCateObj }.text;
    return (
      <div>
        <RecommendBestDiscountView
          selectItem={detail.selectItem}
          bestDiscount={bestDiscount}
        />
        <RecommendSameSubCateListView
          selectItem={detail.selectItem}
          subCateText={subCateText}
          items={item.items}
        />
      </div>
    );
  }
}

export default RecommendContainer;
