import React, { Component } from "react";
import CategoryBestItem from "../view/CategoryBestItem";

class CategoryBestItemContainer extends Component {
  render() {
    const example = ["food", "elec", "clothe"];
    const categoryBestItmes = example.map((ex) => <CategoryBestItem />);

    return categoryBestItmes;
  }
}

export default CategoryBestItemContainer;
