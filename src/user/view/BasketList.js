import React, { Component } from "react";
import { Item, Header, Label } from "semantic-ui-react";

const priceStyle = {
  display: "flex",
  justifyContent: "space-between",
};

class BasketList extends Component {
  render() {
    const { shoppingItem, buyCount, onRemoveBasketItem } = this.props;
    console.log(onRemoveBasketItem);
    return (
      <Item>
        <Item.Image size="tiny" src={shoppingItem.imgUrl} />
        <Item.Content verticalAlign="middle">
          <Header.Content as="h4">
            <Header.Content
              style={{ color: "#273746", fontSize: "20px" }}
              href={`/detail?id=${shoppingItem.id}`}
            >
              {shoppingItem.name}
            </Header.Content>
          </Header.Content>
          <div style={priceStyle}>
            <div>
              <b style={{ color: "#456AE8", fontSize: "20px" }}>
                {String(shoppingItem.price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              </b>

              <b style={{ color: "#566573", fontSize: "16px" }}>
                ({buyCount} 개)
              </b>
            </div>
            <b style={{ color: "red", fontSize: "20px" }}>
              {String(shoppingItem.price * buyCount)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </b>
          </div>
        </Item.Content>
        <Label
          as="a"
          onClick={() => {
            onRemoveBasketItem(shoppingItem.id);
          }}
          style={{ height: "10%", background: "#F32020", color: "white" }}
        >
          삭제
        </Label>
      </Item>
    );
  }
}

export default BasketList;
