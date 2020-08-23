import React, { Component } from "react";
import MyMonpang from "../view/MyMonpang";

import { observer, inject } from "mobx-react";
import { Item, Icon, Header } from "semantic-ui-react";

@inject("Store")
@observer
class MyMonpangContainer extends Component {
  getItemInfo = (id) => {
    const allItem = this.props.Store.item.getItems;
    const item = allItem.find((item) => String(item.id) === String(id));

    return { ...item };
  };

  render() {
    const { user } = this.props.Store;
    const userInfo = user.loginUserInfo;
    const userShoppingList = userInfo.shoppingList.slice("");

    let totalBuyPrice = 0;
    const userShoppingListComponent = userShoppingList.map((shopping) => {
      let price =
        Number(this.getItemInfo([shopping[0]]).price) * Number(shopping[1]);
      totalBuyPrice += price;
      return (
        <MyMonpang
          key={shopping[0]}
          shoppingItem={this.getItemInfo([shopping[0]])}
          buyCount={shopping[1]}
        />
      );
    });

    return (
      <div>
        <Header as="h2" style={{ margin: "35px" }}>
          <Icon name="truck" />
          <Header.Content>주문목록</Header.Content>
        </Header>
        <Item.Group divided style={{ marginLeft: "7%", marginRight: "7%" }}>
          {userShoppingListComponent}
        </Item.Group>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Header as="h1" style={{ margin: "35px" }}>
            <Header.Content>
              총 주문금액{" "}
              <b>
                {String(totalBuyPrice)
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

export default MyMonpangContainer;
