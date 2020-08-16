import { observable, action, computed } from "mobx";

const discountMainImageUrlList = [
  "images/mainPage/page1.png",
  "images/mainPage/page2.png",
  "images/mainPage/page3.png",
  "images/mainPage/page4.png",
];

export default class MainPageStore {
  @observable discountMainImageUrl = discountMainImageUrlList[0];

  @observable leftPage = discountMainImageUrlList.length - 1;
  @observable rightPage = 1;

  @computed get getDiscountMainImageUrl() {
    return this.discountMainImageUrl;
  }

  @computed get getLeftPage() {
    return this.leftPage;
  }

  @computed get getRightPage() {
    return this.rightPage;
  }

  @action changeDiscountMainImageUrl(next) {
    this.discountMainImageUrl = discountMainImageUrlList[next];
  }

  @action setNextPage(nowPage) {
    let left = nowPage - 1;
    let right = nowPage + 1;

    if (left < 0) left = discountMainImageUrlList.length - 1;
    if (right > discountMainImageUrlList.length - 1) right = 0;

    this.leftPage = left;
    this.rightPage = right;
  }
}
