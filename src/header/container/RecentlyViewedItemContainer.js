import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RecentlyViewedList from "../view/RecentlyViewedList";
import RecentlyViewedItem from "../view/RecentlyViewedItem";

@inject("Store")
@observer
class RecentlyViewedItemContainer extends Component {
  removeNewSearchItems = (id) => {
    this.props.Store.item.removeNewSearchItems(id);
  };

  render() {
    const newItemList = this.props.Store.item.getNewSearchItems;

    // 최근 조회 목록 아이템 컴포넌트 리스트 생성
    const recentlyViewedItemComponents = newItemList.map((newItem) => (
      <RecentlyViewedItem
        item={newItem}
        removeNewSearchItems={this.removeNewSearchItems}
      />
    ));

    return (
      <RecentlyViewedList recentlyViewedItems={recentlyViewedItemComponents} />
    );
  }
}

export default RecentlyViewedItemContainer;
