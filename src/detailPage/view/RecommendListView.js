import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import RecommendItemView from "./RecommendItemView";

class RecommendListView extends Component {
  render() {
    const { selectItem, bestDiscount, items, subCateText, count } = this.props;

    const subitems = items.filter(
      (item) => selectItem.subCategory === item.subCategory
    );

    return (
      <Grid>
        <Grid.Row>
          <div
            style={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px" }}
          >
            <span style={{ color: "orange", fontSize: "21px" }}>
              {selectItem.category === "CATFOO"
                ? "식품"
                : selectItem.category === "CATELE"
                ? "가전디지털"
                : "패션의류/잡화"}
            </span>
            <span>&nbsp;특가 상품</span>
          </div>
        </Grid.Row>
        <Grid.Row>
          {selectItem.category === "CATFOO"
            ? bestDiscount[0].map((item) => {
                return <RecommendItemView selectItem={item} />;
              })
            : selectItem.category === "CATELE"
            ? bestDiscount[1].map((item) => {
                return <RecommendItemView selectItem={item} />;
              })
            : bestDiscount[2].map((item) => {
                return <RecommendItemView selectItem={item} />;
              })}
        </Grid.Row>

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

export default RecommendListView;
