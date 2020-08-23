import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ItemInfoView from "../view/ItemInfoView";

import qs from "qs";
import { withRouter } from "react-router-dom";

@inject("Store")
@observer
class ItemInfoContainer extends Component {
  // 제품 구매 수량을 더하는 함수
  onPlus = () => {
    const { selectItem } = this.props.Store.detail;
    if (this.props.Store.detail.count < selectItem.stock) {
      this.props.Store.detail.count += 1;
    }
  };

  // 제품 구매 수량을 빼는 함수
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
    const { item } = this.props.Store;
    item.addNewSearchItems(detail.selectItem);
  }

  // 장바구니에 추가
  addItemToBasket = (id, count) => {
    if (count === 0) {
      alert("구매수량을 선택하세요.");
      return;
    }

    const { user } = this.props.Store;

    user.addItemToBasket(id, count);

    alert("장바구니 등록에 성공했습니다. \n장바구니로 이동합니다.");
    window.location = "/basket";
  };

  render() {
    const { detail } = this.props.Store;

    return (
      <ItemInfoView
        selectItem={detail.selectItem}
        star={this.starCount}
        goHome={this.movePage}
        onPlus={this.onPlus}
        onMinus={this.onMinus}
        count={detail.count}
        subCate={detail.subCate}
        addItemToBasket={this.addItemToBasket}
      />
    );
  }
}

export default withRouter(ItemInfoContainer);
