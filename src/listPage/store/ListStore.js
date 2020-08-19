import { observable, computed, action } from "mobx";
import allData from "../../data/allData";

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
    temp = this.getResultList.map((object) =>
      object[key] === value ? list.push(object) : temp
    );
    this.resultList = list;
  }

  @action
  filterPrice(min, max) {
    let temp = [];
    let list = [];
    temp = this.resultList.map((item) => {
      const fixPrice = item.price * (100 - item.discount) * 0.01;
      return fixPrice >= min && fixPrice <= max ? list.push(item) : temp;
    });
    this.resultList = list;
  }
}
