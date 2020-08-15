import React, { Component } from "react";
import BestDiscountContainer from "./container/BestDiscountContainer";
import CategoryBestItemContainer from "./container/CategoryBestItemContainer";

const introImage = {
  height: "250px",
  background: "DarkOliveGreen",
};

const font = {
  color: "AliceBlue",
  fontWeight: "600",
};

class MainPage extends Component {
  render() {
    return (
      <div>
        <div style={{ ...introImage, ...font }}>intro image</div>
        <div style={font}>할인률이 가장 높은 상품리스트</div>
        <BestDiscountContainer />
        <div style={font}>카테고리별 Best 상품리스트</div>
        <CategoryBestItemContainer />
      </div>
    );
  }
}

export default MainPage;
