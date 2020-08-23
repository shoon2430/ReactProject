import ItemStore from "./Item";
import UserStore from "./User";
import MainPageStore from "../mainPage/store/MainPageStore";
import ListStore from "../listPage/store/ListStore";
import DetailPageStore from "../detailPage/store/DetailPageStore";

export default class CommonStore {
  constructor() {
    this.item = new ItemStore(this);
    this.main = new MainPageStore(this);
    this.list = new ListStore(this);
    this.detail = new DetailPageStore(this);
    this.user = new UserStore(this);
  }
}
