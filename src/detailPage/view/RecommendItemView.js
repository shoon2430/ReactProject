import React, { Component } from "react";
import { Item, Image, Grid } from "semantic-ui-react";
import Price from "./ItemInfomation/Price";
import ItemTitle from "./ItemInfomation/ItemTitle";

// 추천 상품으로 보여줄 하나의 아이템 구성
class RecommendItemView extends Component {
  render() {
    const { selectItem, count } = this.props;

    return (
      <Grid.Column
        celled
        style={{ width: "20%" }}
        as="a"
        href={`/detail?id=${selectItem.id}`}
      >
        <Item>
          <Image src={selectItem.imgUrl} style={{ height: "200px" }} />
          <Item.Group style={{ textAlign: "center" }}>
            <ItemTitle
              selectItem={selectItem}
              titleFontSize={"18px"}
              width={200}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
            />
            <Price
              selectItem={selectItem}
              count={count}
              beforePriceFontSize={"18px"}
              priceFontSize={"25px"}
              wonFontSize={"10px"}
              priceMarginTop={"10px"}
            />
          </Item.Group>
        </Item>
      </Grid.Column>
    );
  }
}

export default RecommendItemView;
