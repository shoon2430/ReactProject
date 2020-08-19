import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RecommendListView from "../view/RecommendListView";
import { Icon } from "semantic-ui-react";
import sub from "../../data/category/sub";


@inject("Store")
@observer
class SameCategoryItemContainer extends Component {
  render() {
    const { detail, item } = this.props.Store;
    const bestDiscount = item.getCateDiscountItems;
    const { selectItem } = this.props.Store.detail;
    const subCateObj = sub.find((data) => data.value === selectItem.subCategory);
    const subCateText = {...subCateObj}.text;
    return (
      <RecommendListView
        selectItem={detail.selectItem}
        bestDiscount={bestDiscount}
        items={item.items}
        subCateText={subCateText}

      />
    );
  }
}

export default SameCategoryItemContainer;
