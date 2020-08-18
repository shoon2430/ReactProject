import React, { Component } from "react";
import CategoryBestItem from "../view/CategoryBestItem";
import { observer, inject } from "mobx-react";
import { Header } from "semantic-ui-react";

@inject("Store")
@observer
class CategoryBestItemContainer extends Component {
  render() {
    const { item } = this.props.Store;
    let categoryBestItmes = item.getCategoryBestItems;
    const categoryColorList = item.getCategoryColorList;

    categoryBestItmes = categoryBestItmes.map((items, idx) => (
      <CategoryBestItem
        category={idx}
        color={categoryColorList[idx]}
        items={{
          1: items.slice(0, 6),
          2: items.slice(6, 12),
          3: items.slice(12, 18),
        }}
      />
    ));

    return (
      <div>
        <Header as="h2">
          <p>Hot Trend</p>
          <p style={{}}>카테고리별 추천 상품</p>
        </Header>
        {categoryBestItmes}
      </div>
    );
  }
}

export default CategoryBestItemContainer;
