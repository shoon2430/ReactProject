import { observable, computed, action } from "mobx";
import AllUser from "../data/userData";

localStorage.DB = localStorage.DB ? localStorage.DB : JSON.stringify(AllUser);
localStorage.LOGIN = localStorage.LOGIN ? localStorage.LOGIN : "";

export default class User {
  @observable users = localStorage.DB
    ? JSON.parse(localStorage.DB)
    : JSON.stringify(AllUser);

  @observable loginUser = localStorage.LOGIN ? localStorage.LOGIN : "";

  @computed get getUsers() {
    return this.users ? this.users.slice("") : [];
  }

  @computed get getLoginUser() {
    return this.loginUser ? this.loginUser : null;
  }

  @action login(id) {
    this.loginUser = id;
    localStorage.LOGIN = id;
  }

  @action signUp(id, password, name) {
    const newUser = {
      key: this.users.length + 1,
      id: `student${this.users.length + 1}`,
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
}
