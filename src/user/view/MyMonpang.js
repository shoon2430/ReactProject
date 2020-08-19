import React, { Component } from "react";
import { Item, Header } from "semantic-ui-react";

const priceStyle = {
  display: "flex",
  justifyContent: "space-between",
};

class MyMonpang extends Component {
  render() {
    const { shoppingItem, buyCount } = this.props;
    return (
      <Item href={`/detail?id=${shoppingItem.id}`}>
        <Item.Image size="tiny" src={shoppingItem.imgUrl} />
        <Item.Content verticalAlign="middle">
          <Header.Content as="h4">
            <Header.Content style={{ color: "#273746", fontSize: "20px" }}>
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
      </Item>
    );
  }
}

export default MyMonpang;
