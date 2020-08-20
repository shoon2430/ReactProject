import React, { Component } from "react";
import BasketList from "../view/BasketList";
import { observer, inject } from "mobx-react";
import { Item, Button, Icon, Header } from "semantic-ui-react";

@inject("Store")
@observer
class BasketListContainer extends Component {
  getItemInfo = (id) => {
    const allItem = this.props.Store.item.getItems;
    const item = allItem.find((item) => String(item.id) === String(id));

    return { ...item };
  };

  removeBasketItem = (id) => {
    if (this.props.Store.user.removeBasketItem(id)) {
      alert("장바구니에서 삭제되었습니다.");
    }
  };

  render() {
    const { user } = this.props.Store;
    const userInfo = user.loginUserInfo;

    const eyeShoppingList = userInfo.eyeShoppingList
      ? userInfo.eyeShoppingList.slice("")
      : [];

    const localBasket = user.getLocalBasket;

    let buyPrice = 0;
    let userEyeShoppingListComponent = "";

    if (eyeShoppingList.length > 0) {
      userEyeShoppingListComponent = eyeShoppingList.map((eyeShopping) => {
        let price = this.getItemInfo([eyeShopping[0]]).price * eyeShopping[1];
        buyPrice += price;

        return (
          <BasketList
            key={eyeShopping[0]}
            shoppingItem={this.getItemInfo([eyeShopping[0]])}
            buyCount={eyeShopping[1]}
            onRemoveBasketItem={this.removeBasketItem}
          />
        );
      });
    } else if (localBasket.length > 0 && !userInfo.id) {
      userEyeShoppingListComponent = localBasket.map((eyeShopping) => {
        let price = this.getItemInfo([eyeShopping[0]]).price * eyeShopping[1];
        buyPrice += price;

        return (
          <BasketList
            key={eyeShopping[0]}
            shoppingItem={this.getItemInfo([eyeShopping[0]])}
            buyCount={eyeShopping[1]}
            onRemoveBasketItem={this.removeBasketItem}
          />
        );
      });
    }

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
            <Header.Content
              style={{
                textAlign: "right",
              }}
            >
              총 금액{" "}
              <b>
                {String(buyPrice)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              </b>
              원
              <br />
              <Button
                color="blue"
                style={{ width: "150px" }}
                onClick={() => {
                  window.confirm("주문하시겠습니까?");
                }}
              >
                주문하기
              </Button>
            </Header.Content>
          </Header>
        </div>
      </div>
    );
  }
}

export default BasketListContainer;
