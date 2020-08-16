import React, { Component } from "react";
import BestDiscountContainer from "./container/BestDiscountContainer";
import CategoryBestItemContainer from "./container/CategoryBestItemContainer";

class MainPage extends Component {
  render() {
    return (
      <div>
        <BestDiscountContainer />
        <CategoryBestItemContainer />
      </div>
    );
  }
}

export default MainPage;
