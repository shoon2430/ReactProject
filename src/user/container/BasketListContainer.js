import React, { Component } from "react";
import BasketList from "../view/BasketList";
import { observer, inject } from "mobx-react";
import { Item, Grid, Icon, Header } from "semantic-ui-react";

@inject("Store")
@observer
class BasketListContainer extends Component {
  getItemInfo = (id) => {
    const allItem = this.props.Store.item.getItems;
    const item = allItem.find((item) => String(item.id) === String(id));

    return { ...item };
  };
  render() {
    const { user } = this.props.Store;
    const userInfo = user.loginUserInfo;

    const eyeShoppingList = userInfo.eyeShoppingList
      ? userInfo.eyeShoppingList.slice("")
      : [];

    let buyPrice = 0;
    const userEyeShoppingListComponent = eyeShoppingList.map((eyeShopping) => {
      let price = this.getItemInfo([eyeShopping[0]]).price * eyeShopping[1];
      buyPrice += price;

      return (
        <BasketList
          key={eyeShopping[0]}
          shoppingItem={this.getItemInfo([eyeShopping[0]])}
          buyCount={eyeShopping[1]}
        />
      );
    });

    return (
      <div>
        <Header as="h2" style={{ margin: "35px" }}>
          <Icon name="truck" />
          <Header.Content>장바구니</Header.Content>
        </Header>
        <Item.Group divided style={{ marginLeft: "7%", marginRight: "7%" }}>
          {userEyeShoppingListComponent.length === 0 && (
            <div
              style={{
                margin: "0 auto",
                textAlign: "center",
                marginTop: "92px",
                marginBottom: "90px",
              }}
            >
              <h1>장바구니에 담긴 상품이 없습니다.</h1>
            </div>
          )}
          {userEyeShoppingListComponent}
        </Item.Group>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Header as="h1" style={{ margin: "35px" }}>
            <Header.Content>
              총 금액{" "}
              <b>
                {String(buyPrice)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              </b>
              원
            </Header.Content>
          </Header>
        </div>
      </div>
    );
  }
}

export default BasketListContainer;
