import React, { Component } from "react";
import { Item, Icon, Button } from "semantic-ui-react";

class Price extends Component {
  render() {
    const {
      selectItem,
      count,
      beforePriceFontSize,
      priceFontSize,
      wonFontSize,
      priceMarginTop,
    } = this.props;
    return (
      <Item>
        <Item.Content>
          {/* 할인 전 정가 */}
          <Item.Meta style={{ fontSize: beforePriceFontSize }}>
            <span>{selectItem.discount}%</span>
            <span
              style={{
                textDecoration: "line-through",
              }}
            >
              &nbsp;
              {selectItem.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </span>
          </Item.Meta>
          {/* 할인 적용가 */}
          <Item.Description
            style={{
              color: "#B90000",
              fontWeight: "bold",
              marginTop: priceMarginTop,
            }}
          >
            {/* 재고가 없으면 */}
            {selectItem.stock - count === 0 ? (
              // 할인이 적용된 금액에 줄 긋고, 품절 아이콘 표시
              <div>
                <span style={{ marginLeft: "10px" }}>
                  <Icon
                    disabled
                    name="level up alternate"
                    rotated="clockwise"
                    color="black"
                    size="big"
                  />
                </span>
                <span
                  style={{
                    textDecoration: "line-through",
                    textDecorationColor: "black",
                    fontSize: priceFontSize,
                  }}
                >
                  &nbsp;
                  {(selectItem.price * (100 - selectItem.discount) * 0.01)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  &nbsp;원
                  <Button
                    secondary
                    style={{ marginLeft: "3px", marginTop: "-3px" }}
                  >
                    품절
                  </Button>
                </span>
              </div>
            ) : (
              // 할인이 적용된 가격 표시
              <div>
                <span style={{ marginLeft: "10px" }}>
                  <Icon
                    disabled
                    name="level up alternate"
                    rotated="clockwise"
                    color="black"
                  />
                </span>
                <span style={{ fontSize: priceFontSize }}>
                  {(selectItem.price * (100 - selectItem.discount) * 0.01)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                <span style={{ fontSize: wonFontSize }}>&nbsp;원</span>
              </div>
            )}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default Price;
