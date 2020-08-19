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

  // 장바구니에 추가
  addItemToBasket = (id, count) => {
    console.log("장바구니에 추가하시겠습니까?");

    const { user } = this.props.Store;

    const userInfo = user.getLoginUser !== "null" ? user.loginUserInfo : null;
    console.log(userInfo);
    if (userInfo === null) {
      user.addItemToBasket(id, count);
    }
    user.addItemToBasket(id, count);
  };

  // // 상품구매
  // buyItem ()=>{

  // }

  render() {
    const { detail } = this.props.Store;
    const { user } = this.props.Store;
    console.log(`HELLO22 -> ${user.getLocalBasket}`);
    // const { selectItem } = this.props.DetailPageStore;
    return (
      <ItemInfoView
        selectItem={detail.selectItem}
        star={this.starCount}
        goHome={this.movePage}
        onPlus={this.onPlus}
        onMinus={this.onMinus}
        count={detail.count}
        subCate={detail.subCate}
        // subCateText={subCateText}
        addItemToBasket={this.addItemToBasket}
      />
    );
  }
}

export default withRouter(ItemInfoContainer);
