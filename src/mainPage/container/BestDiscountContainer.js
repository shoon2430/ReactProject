import React, { Component } from "react";
import BestDiscountImage from "../view/BestDiscountView/BestDiscountImage";
import BestDiscountItemList from "../view/BestDiscountView/BestDiscountItemList";
import BestDiscountItem from "../view/BestDiscountView/BestDiscountItem";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class BestDiscountContainer extends Component {
  render() {
    const { item } = this.props.Store;
    const bestDiscountItems = item.getBestDiscounteItems.map((item) => (
      <BestDiscountItem bestDiscountItem={item} />
    ));

    return (
      <div>
        <BestDiscountImage />
        <BestDiscountItemList bestDiscountItems={bestDiscountItems} />
      </div>
    );
  }
}

export default BestDiscountContainer;
