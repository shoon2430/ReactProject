import { observable, action } from "mobx";
import allData from "../../data/allData";
import foodData from "../../data/foodData";
import elecData from "../../data/elecData";

// Detail Page Mobx Store 클래스 선언
export default class DetailPageStore {
  // 관리해야하는 state 객체를 @observable로 선언 및 초기화
  // @observable
  // data = allData;

  @observable
  selectItem = elecData[1];
}   
