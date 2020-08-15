import ItemStore from "./Item";
import PageStore from "./Page";

export default class CommonStore {
  constructor() {
    this.item = new ItemStore(this);
    this.page = new PageStore(this);
  }
}
