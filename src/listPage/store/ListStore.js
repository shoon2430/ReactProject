import { observable, computed, action } from "mobx";
import { AllData } from "../../data/allData";
import { Main } from "../../data/category/main";
import { Sub } from "../../data/category/sub";

export default class ListStore {
  @observable
  allData = AllData;

  @observable
  main = Main;

  @observable
  sub = Sub;

  @computed
  get getMainCategory() {
    return this.main ? { ...this.main } : [];
  }

  @computed
  get getSubCategory() {
    return this.sub ? { ...this.sub } : [];
  }

  @action
  filterCategory() {}
}
