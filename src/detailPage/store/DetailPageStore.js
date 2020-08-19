import { observable, action, computed } from "mobx";
import allData from "../../data/allData";
import foodData from "../../data/foodData";
import elecData from "../../data/elecData";
import main from "../../data/category/main";
import sub from "../../data/category/sub";
import { FeedSummary } from "semantic-ui-react";

// Detail Page Mobx Store 클래스 선언
export default class DetailPageStore {
  // 관리해야하는 state 객체를 @observable로 선언 및 초기화
  // @observable
  // data = allData;

  @observable
  selectItem = elecData[1];

  @action setSelectItem(id) {
    this.selectItem = allData.find((data) => String(data.id) === String(id));
  }

  @observable
  count = 0;

  @observable
  subCate = "";

  // @action setSubName(selectItem) {
  //   // this.subCate = sub.find(
  //   //   (data) => data.value === selectItem.subCategory
  //   // );
  //   this.subCate = selectItem;
  // }
  sub = {};

  @computed
  get getSelectItem() {
    return this.selectItem ? {...this.selectItem} : {};
  }
}
