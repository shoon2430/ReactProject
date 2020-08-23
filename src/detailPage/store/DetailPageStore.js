import { observable, action, computed } from "mobx";
import allData from "../../data/allData";
import elecData from "../../data/elecData";

// Detail Page Mobx Store 클래스 선언
export default class DetailPageStore {
  // 관리해야하는 state 객체를 @observable로 선언 및 초기화
  // @observable
  // data = allData;

  /* 공통 Store객체를 받아옴
    상위 클래스인 CommonStore에서 this를 파라미터로 내려주기 때문
  */
  constructor(root) {
    this.root = root;
  }

  @observable
  selectItem = elecData[1];

  @action setSelectItem(id) {
    // stores/item.js에서 가지고오는 전체 데이터를 사용
    const allData = this.root.item.getItems;
    this.selectItem = allData.find((data) => String(data.id) === String(id));
  }

  // 디테일페이지 상품수량 카운트
  @observable
  count = 0;

  @computed
  get getSelectItem() {
    return this.selectItem ? { ...this.selectItem } : {};
  }
}
