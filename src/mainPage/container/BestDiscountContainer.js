import React, { Component } from "react";
import BestDiscountImage from "../view/BestDiscountImage";
import BestDiscountItem from "../view/BestDiscountItem";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class BestDiscountContainer extends Component {
  changeBackground = (next) => {
    this.props.Store.main.changeDiscountMainImageUrl(next);
    this.props.Store.main.setNextPage(next);
  };

  render() {
    const { main } = this.props.Store;
    return (
      <div style={{ background: "#e9e9e9" }}>
        <BestDiscountImage
          Background={main.getDiscountMainImageUrl}
          changeBackground={this.changeBackground}
          left={main.getLeftPage}
          right={main.getRightPage}
        />
        <BestDiscountItem />
      </div>
    );
  }
}

export default BestDiscountContainer;
