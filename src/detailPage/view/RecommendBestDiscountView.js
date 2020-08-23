import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import RecommendItemView from "./RecommendItemView";
import main from "../../data/category/main";

// selectItem이 포함된 메인 카테고리의 아이템 중 할인율이 높은 상품 리스트
class RecommendBestDiscountView extends Component {
  render() {
    const { selectItem, bestDiscount } = this.props;

    const mainCateObj = main.find((data) => data.value === selectItem.category);
    const mainCateText = { ...mainCateObj }.text;

    return (
      <Grid>
        <Grid.Row>
          <div
            style={{ fontWeight: "bold", fontSize: "20px", marginTop: "20px" }}
          >
            <span style={{ color: "orange", fontSize: "21px" }}>
              {mainCateText}
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
      </Grid>
    );
  }
}

export default RecommendBestDiscountView;
