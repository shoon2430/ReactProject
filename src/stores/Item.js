import { observable, computed, action } from "mobx";
import allData from "../data/allData";

localStorage.NEW = localStorage.NEW ? localStorage.NEW : JSON.stringify([]);

localStorage.ITEMS = localStorage.ITEMS
  ? localStorage.ITEMS
  : JSON.stringify(allData);

export default class Item {
  /*
  아이템 관련 Store
  
  저희가 만든 데이터들인 아이템과, 카테고리, 검색어에 대한 State를 관리하는 Store입니다.
  */

  // 전체 아이템
  @observable items = localStorage.ITEMS
    ? JSON.parse(localStorage.ITEMS)
    : JSON.stringify(allData);

  // 최근 본 상품 리스트
  @observable newSearchItems = localStorage.NEW
    ? JSON.parse(localStorage.NEW)
    : JSON.stringify([]);

  // 최근 본 상품 리스트 조회
  @computed get getNewSearchItems() {
    return this.newSearchItems ? this.newSearchItems.slice("") : [];
  }

  /* 최근본 상품에 추가
     detail페이지에 들어갈시 get요청의 파라미터에서 id값을 취득하여 추가한다. */
  @action addNewSearchItems(newItem) {
    const itemCheck = this.newSearchItems.find(
      (item) => item.id === newItem.id
    );

    // 동일한 아이템이 없을 경우
    if (!itemCheck) {
      this.newSearchItems.unshift(newItem);
      this.newSearchItems = this.newSearchItems.slice(0, 9);
      localStorage.NEW = JSON.stringify(this.newSearchItems);
    }
  }

  /* 최근본 상품 아이템 삭제
    id값에 맞는 아이템을 삭제한다. */
  @action removeNewSearchItems(id) {
    this.newSearchItems = this.newSearchItems.filter((item) => item.id !== id);
    localStorage.NEW = JSON.stringify(this.newSearchItems);
  }

  // 전체 아이템 조회
  @computed get getItems() {
    return this.items ? this.items.slice("") : [];
  }

  // 전체 아이템 변경
  @action setItems(items) {
    this.items = items;
    localStorage.ITEMS = JSON.stringify(this.items);
  }

  // 카테고리별 아이템 리스트 조회
  getCategoryItemList(category) {
    const allItem = this.items;
    return allItem.filter((item) => item.category === category);
  }

  // 정렬 오름차순 내림차순 지정 함수
  categorySort(a, b, key, option) {
    if (a[key] < b[key]) return 1 * option;
    if (a[key] > b[key]) return -1 * option;
    // return a[key] < b[key] ? 1 * option : -1 * option
  }

  /* 카테고리 정렬 함수
   sortArray에 있는 key값으로 정렬한다.
   sortArray ={
      key:"정렬기준",
      option: (1:오름차순 -1:내림차순)
    }
    */
  categoryItemSort(items, sortArray) {
    return items.sort((a, b) => {
      for (var i = 0; i < sortArray.length; i++) {
        const { key, option } = sortArray[i];

        if (this.categorySort(a, b, key, option) === 1) return 1;
        if (this.categorySort(a, b, key, option) === -1) return -1;
      }
      return 0;
    });
  }

  // 카테고리별 할인율이 가장 높은 아이템
  @computed get getCateDiscountItems() {
    const MAX_COUNT = 5;
    const sortObjList = [
      {
        key: "discount",
        option: 1,
      },
    ];

    let foodDiscount = this.categoryItemSort(
      this.getCategoryItemList("CATFOO"),
      sortObjList
    );
    let elecDiscount = this.categoryItemSort(
      this.getCategoryItemList("CATELE"),
      sortObjList
    );
    let clotheDiscount = this.categoryItemSort(
      this.getCategoryItemList("CATCLO"),
      sortObjList
    );

    return [
      foodDiscount.slice(0, MAX_COUNT),
      elecDiscount.slice(0, MAX_COUNT),
      clotheDiscount.slice(0, MAX_COUNT),
    ];
  }

  // 할인률이 가장 높은 아이템 조회
  @computed get getBestDiscounteItems() {
    const MAX_COUNT = 8;
    const sortObjList = [
      {
        key: "rating",
        option: 1,
      },
      {
        key: "discount",
        option: 1,
      },
      {
        key: "sale",
        option: 1,
      },
    ];

    const bestDiscountItems = this.categoryItemSort(this.items, sortObjList);
    return bestDiscountItems.slice(0, MAX_COUNT);
  }

  // 카테고리별 추천 아이템
  @computed get getCategoryBestItems() {
    const MAX_COUNT = 18;
    const sortObjList = [
      {
        key: "rating",
        option: 1,
      },
      {
        key: "sale",
        option: 1,
      },
    ];

    const foodItems = this.categoryItemSort(
      this.getCategoryItemList("CATFOO"),
      sortObjList
    );
    const elecItems = this.categoryItemSort(
      this.getCategoryItemList("CATELE"),
      sortObjList
    );
    const clotheItems = this.categoryItemSort(
      this.getCategoryItemList("CATCLO"),
      sortObjList
    );

    return [
      foodItems.slice(0, MAX_COUNT),
      elecItems.slice(0, MAX_COUNT),
      clotheItems.slice(0, MAX_COUNT),
    ];
  }

  // 카테고리별 색상 가져오기 위함
  @computed get getCategoryColorList() {
    return ["orange", "blue", "green"];
  }
}
