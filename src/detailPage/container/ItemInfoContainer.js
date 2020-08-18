import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ItemInfoView from "../view/ItemInfoView";
import { Icon } from "semantic-ui-react";

@inject("Store")
@observer
class ItemInfoContainer extends Component {
  starCount = (rating) => {
    let start = [];
    for (var i = 0; i < rating; i++) {
      start = start.concat(<Icon name="star" color="yellow" size="large" />);
    }
    for (var j = 0; j < 5 - rating; j++) {
      start = start.concat(<Icon name="star" color="grey" size="large" />);
    }
    return start;
  };

  movePage = (e) => {
    this.props.Store.page.moveToPage(e);
  };

  onPlus = () => {
    const { selectItem } = this.props.Store.detail;
    if (this.props.Store.detail.count < selectItem.stock) {
      this.props.Store.detail.count += 1;
    }
  };

  onMinus = () => {
    if (this.props.Store.detail.count > 0) {
      this.props.Store.detail.count -= 1;
    }
  };

  render() {
    const { detail } = this.props.Store;
    // const { selectItem } = this.props.DetailPageStore;
    return (
      <ItemInfoView
        selectItem={detail.selectItem}
        star={this.starCount}
        goHome={this.movePage}
        onPlus={this.onPlus}
        onMinus={this.onMinus}
        count={detail.count}
      />
    );
  }
}

export default ItemInfoContainer;
