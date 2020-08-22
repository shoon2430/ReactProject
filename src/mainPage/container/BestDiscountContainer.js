import React, { Component } from "react";
import BestDiscountImage from "../view/BestDiscountView/BestDiscountImage";
import BestDiscountItemList from "../view/BestDiscountView/BestDiscountItemList";
import BestDiscountItem from "../view/BestDiscountView/BestDiscountItem";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class BestDiscountContainer extends Component {
  changeBackground = (next) => {
    this.props.Store.main.changeDiscountMainImageUrl(next);
    this.props.Store.main.setNextPage(next);
  };

  render() {
    const { main, item } = this.props.Store;
    const bestDiscountItems = item.getBestDiscounteItems.map((item) => (
      <BestDiscountItem bestDiscountItem={item} />
    ));

    return (
      <div>
        <BestDiscountImage
          Background={main.getDiscountMainImageUrl}
          changeBackground={this.changeBackground}
          left={main.getLeftPage}
          right={main.getRightPage}
        />
        <BestDiscountItemList bestDiscountItems={bestDiscountItems} />
      </div>
    );
  }
}

export default BestDiscountContainer;
