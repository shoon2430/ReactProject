import React, { Component } from "react";
import { Item, Image, Grid, Icon } from "semantic-ui-react";
import Price from "./ItemInfomation/Price";
import ItemTitle from "./ItemInfomation/ItemTitle";

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
            {/* <Item.Content>
              <span style={{ color: "#B90000", fontWeight: "bold" }}>
                {selectItem.discount}%&nbsp;
              </span>
              <span style={{ textDecoration: "line-through" }}>
                {selectItem.price}
              </span>
            </Item.Content>
            <Item.Content>
              <span style={{ marginLeft: "10px" }}>
                <Icon
                  disabled
                  size="tiny"
                  name="level up alternate"
                  rotated="clockwise"
                  color="black"
                />
              </span>
              <span
                style={{
                  color: "#B90000",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {(selectItem.price * (100 - selectItem.discount) * 0.01)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
              <span>&nbsp;원</span>
            </Item.Content> */}
          </Item.Group>
        </Item>
      </Grid.Column>
    );
  }
}

export default RecommendItemView;
