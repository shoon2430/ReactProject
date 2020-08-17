import React, { Component } from "react";

class CategoryLineContainer extends Component {
  render() {
    return (
      <div>
        메인카테고리-서브카테고리
        {/* 서브카테고리를 클릭했을때 카테고리 리스트페이지로 넘어오기떄문에
                서브카테고리코드를 URL로 받아서 카테고리라인에 넣어야한다.*/}
        <hr />
      </div>
    );
  }
}

export default CategoryLineContainer;
