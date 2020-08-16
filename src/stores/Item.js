import { observable, computed, action } from "mobx";
import allData from "../data/allData";

export default class Item {
  /*
  아이템 관련 Store
  
  저희가 만든 데이터들인 아이템과, 카테고리, 검색어에 대한 State를 관리하는 Store입니다.
  */

  // 전체 아이템
  @observable items = allData;

  // 현재 조회되고있는 아이템 리스트
  @observable selectedItems = [];

  // 선택한 아이템
  @observable selecteItem = null;

  // 선택된 카테고리
  @observable selectedCategory = null;

  // 선택된 서브 카테고리
  @observable selectedSubCategory = null;

  // 검색어
  @observable searchWord = null;

  // 전체 아이템 조회
  @computed get getItems() {
    return this.items ? this.items.splice("") : [];
  }

  // 할인률이 가장 높은 아이템 조회
  @computed get getBestDiscounteItems() {
    const MAX_COUNT = 8;
    let bestDiscountItems = [];

    bestDiscountItems = this.items.sort((a, b) => {
      const r1 = a["rating"];
      const r2 = b["rating"];
      const s1 = a["sale"];
      const s2 = b["sale"];
      const d1 = a["discount"];
      const d2 = b["discount"];

      // rating 내림차순
      if (r1 < r2) return 1;
      if (r1 > r2) return -1;
      // discount 내림차순
      if (d1 < d2) return 1;
      if (d1 > d2) return -1;
      // sale 내림차순
      if (s1 < s2) return 1;
      if (s1 > s2) return -1;
      return 0;
    });

    return bestDiscountItems.slice(0, MAX_COUNT);
  }
}
