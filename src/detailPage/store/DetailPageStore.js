import { observable, action, computed } from "mobx";
import allData from "../../data/allData";
import elecData from "../../data/elecData";

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

  // @observable
  // beforePriceFontSize = "";
  // @observable
  // priceFontSize = "";
  // @observable
  // wonFontSize = "";
  // @observable
  // priceMarginTop = "";

  @observable
  subCate = "";

  sub = {};

  @computed
  get getSelectItem() {
    return this.selectItem ? { ...this.selectItem } : {};
  }
}
