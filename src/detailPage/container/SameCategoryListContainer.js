import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RecommendListView from "../view/RecommendListView";
import { Icon } from "semantic-ui-react";

@inject("Store")
@observer
class SameCategoryItemContainer extends Component {
  render() {
    const { detail, item } = this.props.Store;
    const bestDiscount = item.getCateDiscountItems;
    return (
      <RecommendListView
        selectItem={detail.selectItem}
        bestDiscount={bestDiscount}
        items={item.items}
      />
    );
  }
}

export default SameCategoryItemContainer;
