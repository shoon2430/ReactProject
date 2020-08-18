import { observable, computed, action } from "mobx";
import allData from "../../data/allData";
import clothe from "../../data/clotheData";

export default class ListStore {
  @observable
  allData = allData;

  @observable
  urlParams = [];

  @observable
  mainCategory = "";

  @observable
  subCategory = "";

  //카테고리가 선택됐을때 따로 빼놓는 object
  @observable
  categoryObject = [];

  //필터를 거쳐서 뷰에 뿌려질때 담는 전체 그릇[]
  @observable
  resultList = [];

  //필터를 거쳐서 뷰에 뿌려질때 담는 하나의 그릇{}
  @observable
  result = {};

  @computed
  get getResult() {
    return this.result ? { ...this.result } : {};
  }

  @computed
  get getResultImgUrl() {
    return this.resultImgUrl;
  }

  @computed
  get getResultList() {
    console.log("resultlist = ", this.resultList.slice(""));
    return this.resultList ? this.resultList.slice("") : [];
  }
  @computed
  get getMainCategory() {
    return this.mainCategory ? this.mainCategory : "";
  }

  @computed
  get getSubCategory() {
    return this.subCategory ? this.subCategory : "";
  }

  @action
  setMainCategory(main) {
    this.mainCategory = main;
  }
  @action
  setSubCategory(sub) {
    this.subCategory = sub;
  }

  @action //카테고리를 따로 떼는 작업을 하는 함수.
  setMainCategoryMakeList() {
    this.resultList = this.allData.filter((data) => {
      if (data.category === this.mainCategory) {
        return data;
      }
    });
  }
  @action
  setSubCategoryMakeList() {
    console.log("store makelist sub before", this.resultList);
    this.resultList = this.allData.filter((data) => {
      if (data.subCategory === this.subCategory) {
        return data;
      }
    });
  }

  @action
  filterCategory(key, value) {
    //멤인카테고리를 먼저 스테터스에 저장을 해야 돌아가는 함수임..
    //아직 url로 안받아와서 작동 잘 안함.
    let temp = [];
    let list = [];
    console.log("filterCategory---", this.resultList);
    temp = this.reulstList.map((object) =>
      object[key].match(value) ? list.push(object) : temp
    );
    this.resultList = list;
  }

  @action
  filterPrice(min, max) {
    console.log("Store--filterPrice", min, max, this.resultList);
    let temp = [];
    let list = [];
    temp = this.resultList.map((object) =>
      object.price >= min && object.price <= max ? list.push(object) : temp
    );
    console.log("listStore---filterPrice", list);
    this.resultList = list;
  }
}
