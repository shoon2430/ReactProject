import ItemStore from "./Item";
import PageStore from "./Page";
import MainPageStore from "../mainPage/store/MainPageStore";
import ListStore from "../listPage/store/ListStore";

export default class CommonStore {
  constructor() {
    this.item = new ItemStore(this);
    this.page = new PageStore(this);
    this.main = new MainPageStore(this);
    this.list = new ListStore(this);
  }
}
