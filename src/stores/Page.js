import { observable, computed, action } from "mobx";

// page는 MAIN, LIST, DETAIL로 구분
const pageList = ["MAIN", "LIST", "DETAIL"];

export default class Page {
  /*
  페이지 관련 Store 

  저희가 구현해야할 화면은 MAIN, LIST, DETAIL임으로
  이벤트를 통해서 page state를 변경하면 화면이 바뀌도록 되어있습니다.
  */

  @observable page = pageList[0];

  @computed get getPage() {
    return this.page;
  }

  // 페이지로 이동
  @action moveToPage(page) {
    this.page = pageList[pageList.indexOf(page)];
  }
}
