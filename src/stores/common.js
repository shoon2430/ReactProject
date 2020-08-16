import ItemStore from "./Item";
import PageStore from "./Page";
import MainPageStore from "../mainPage/store/MainPageStore";

export default class CommonStore {
  constructor() {
    this.item = new ItemStore(this);
    this.page = new PageStore(this);
    this.main = new MainPageStore(this);
  }
}
