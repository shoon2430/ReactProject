import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import RecommendItemView from "./RecommendItemView";

// selectItem이 포한된 sub 카테고리 상품 리스트
class RecommendSameSubCateListView extends Component {
  render() {
    const { selectItem, items, subCateText } = this.props;

    const subitems = items.filter(
      (item) => selectItem.subCategory === item.subCategory
    );

    return (
      <Grid>
        <Grid.Row>
          <div
            style={{ fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}
          >
            <span style={{ color: "orange" }}>{subCateText}</span>
            <span>&nbsp;연관 상품</span>
          </div>
        </Grid.Row>

        <Grid.Row>
          {subitems.slice(0, 5).map((item) => (
            <RecommendItemView selectItem={item} />
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

export default RecommendSameSubCateListView;
