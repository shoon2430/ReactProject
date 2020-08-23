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
    const { item } = this.props.Store;
    const newItemList = item.getNewSearchItems;

    const recentlyViewedItemComponents = newItemList.map((newItem) => (
      <RecentlyViewedItem
        item={newItem}
        removeNewSearchItems={this.removeNewSearchItems}
      />
    ));

    return (
      <div>
        <RecentlyViewedList
          recentlyViewedItems={recentlyViewedItemComponents}
        />
      </div>
    );
  }
}

export default RecentlyViewedItemContainer;
