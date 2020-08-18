import { observable, computed, action } from "mobx";
import allData from "../../data/allData";
import main from "../../data/category/main";
import sub from "../../data/category/sub";
import clothe from "../../data/clotheData";

export default class ListStore {
  @observable
  allData = allData;

  @observable
  mainCategory = "clothe";

  @observable
  subCategory = "";

  //카테고리가 선택됐을때 따로 빼놓는 object
  @observable
  categoryObject = [];

  //필터를 거쳐서 뷰에 뿌려질때 담는 전체 그릇[]
  @observable
  resultList = clothe;

  //필터를 거쳐서 뷰에 뿌려질때 담는 하나의 그릇{}
  @observable
  result = clothe[0];

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
    console.log("resultlist");
    return this.resultLIst ? this.resultList.slice("") : [];
  }
  @computed
  get getMainCategory() {
    return this.mainCategory ? this.mainCategory : "CATCLO";
  }

  @computed
  get getSubCategory() {
    return this.subCategory ? this.subCategory : "";
  }

  @action //카테고리를 따로 떼는 작업을 하는 함수.
  setCategoryObject() {
    console.log("setCategoryObject--", this.mainCategory);
    this.categoryObject = this.allData.filter((data) => {
      console.log(`${data.category}-----------categroy:${this.mainCategory}`);
      if (data.category === this.mainCategory) {
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
    console.log("filterCategory---", this.categoryObject);
    temp = this.categoryObject.map((object) =>
      object[key].mathch(value) ? list.push(object) : temp
    );
    this.resultList = list;
  }

  @action
  filterPrice(min, max) {
    console.log("Store--filterPrice", min, max, this.categoryObject);
    let temp = [];
    let list = [];
    temp = this.categoryObject.map((object) =>
      object.price >= min && object.price <= max ? list.push(object) : temp
    );
    console.log("listStore---filterPrice", list);
    this.resultList = list;
  }
}
