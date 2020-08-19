import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ItemInfoView from "../view/ItemInfoView";
import { Icon } from "semantic-ui-react";
import sub from "../../data/category/sub";

import qs from "qs";
import { withRouter } from "react-router-dom";

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

  componentDidMount() {
    const searchObj = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    const { detail } = this.props.Store;
    detail.setSelectItem(searchObj.id);
  }

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

export default withRouter(ItemInfoContainer);
