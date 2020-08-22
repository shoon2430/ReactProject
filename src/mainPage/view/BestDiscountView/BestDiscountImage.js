import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// 메인화면의 광고 이미지 리스트
const slideImages = [
  "images/mainPage/page1.png",
  "images/mainPage/page2.png",
  "images/mainPage/page3.png",
  "images/mainPage/page4.png",
];

/*
  메인페이지의 베스트 아이템 이미지 슬라이드
*/
class BestDiscountImage extends Component {
  render() {
    // 리액트 슬라이드 쇼 적용
    const slides = slideImages.map((imageUrl) => (
      <div className="each-slide">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            height: "200px",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    ));

    return (
      <div className="slide-container">
        <Slide>{slides}</Slide>
      </div>
    );
  }
}

export default BestDiscountImage;
