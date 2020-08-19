import { observable, computed, action } from "mobx";
import AllUser from "../data/userData";

localStorage.DB = localStorage.DB ? localStorage.DB : JSON.stringify(AllUser);
localStorage.LOGIN = localStorage.LOGIN ? localStorage.LOGIN : "null";
localStorage.BASKET = localStorage.BASKET
  ? localStorage.BASKET
  : JSON.stringify([]);

export default class User {
  constructor(root) {
    this.root = root;
  }

  @observable users = localStorage.DB
    ? JSON.parse(localStorage.DB)
    : JSON.stringify(AllUser);

  @observable loginUser = localStorage.LOGIN ? localStorage.LOGIN : "";

  @observable localBasket = localStorage.BASKET
    ? JSON.parse(localStorage.BASKET)
    : JSON.stringify([]);

  @computed get getUsers() {
    return this.users ? this.users.slice("") : [];
  }

  @computed get getLoginUser() {
    return this.loginUser ? this.loginUser : null;
  }

  @computed get loginUserInfo() {
    const userInfo = this.users.find(
      (user) => String(user.id) === String(this.loginUser)
    );
    return { ...userInfo };
  }

  @action login(id) {
    this.loginUser = id;
    localStorage.LOGIN = id;
  }

  @action logOut() {
    this.loginUser = null;
    localStorage.LOGIN = null;
    window.location = "/login";
  }

  @action signUp(id, password, name) {
    const newUser = {
      key: this.users.length + 1,
      id: id,
      password: password,
      name: name,
      gender: "M",
      age: Math.random() * (100 - 20) + 20,
      money: Math.random() * (10000000 - 1000000) + 1000000,
      shoppingList: [],
      eyeShoppingList: [],
    };

    this.users = this.users.concat(newUser);
    localStorage.DB = JSON.stringify(this.users);
  }

  // 로컬 장바구니 조회
  @computed get getLocalBasket() {
    return this.localBasket.length > 0 ? this.localBasket.slice("") : [];
  }

  // 로컬 장바구니에 등록
  @action addItemToBasket(id, count) {
    const { item } = this.root;

    const AllItem = item.getItems;

    if (this.getLoginUser !== "null") {
      const userInfo = this.loginUserInfo;
      const newUsers = this.users.map((user) => {
        if (user.id === userInfo.id) {
          let userBasket = user.eyeShoppingList;
          user.eyeShoppingList = userBasket.concat([[id, count]]);
        }
        return user;
      });
      this.users = newUsers;
      localStorage.DB = JSON.stringify(newUsers);
    } else {
      item.setItems(
        AllItem.map((item) => {
          if (item.id === id) {
            item.stock = item.stock - count;
          }
          return item;
        })
      );

      const numItem = [id, count];
      localStorage.BASKET = JSON.stringify(this.localBasket.concat([numItem]));
    }
  }

  @action removeBasketItem(id) {
    // 로그인 인경우

    if (this.getLoginUser !== "null") {
      const userInfo = this.loginUserInfo;
      const newUsers = this.users.map((user) => {
        if (user.id === userInfo.id) {
          let userBasket = user.eyeShoppingList;
          user.eyeShoppingList = userBasket.filter((item) => item[0] !== id);
        }
        return user;
      });
      this.users = newUsers;
      localStorage.DB = JSON.stringify(newUsers);
    } else {
      console.log(this.localBasket);
      this.localBasket = this.localBasket.filter((item) => item[0] !== id);
      localStorage.BASKET = JSON.stringify(this.localBasket);
    }
  }
}
