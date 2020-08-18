import React, { Component } from "react";
import { Header, Label } from "semantic-ui-react";

const categoryStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
};

const headerStyle = {
  width: "90%",
  height: "30%",
  marginTop: "35%",
  textAlign: "left",
  fontSize: "30px",
  // color: "#3080DF",
};

const labelStyle = {
  marginTop: "10px",
  padding: "10px",
  background: "white",
};

class Category extends Component {
  render() {
    const categoryNumber = this.props.category;
    const color = this.props.color;

    // 임시로 데이터
    const mainText = ["식품", "디지털", "패션"];
    const hotKeywords = [
      ["과일", "음료", "과자", "가공식품", "건강식품"],
      ["컴퓨터", "청소기", "밥솥", "공기청정기", "오디오"],
      ["여성패션", "남성패션", "스포츠패션", "신발", "가방/잡화"],
    ];

    const label = hotKeywords[categoryNumber].map((key) => (
      <Label
        style={{ ...labelStyle, color: color, border: `solid ${color} 1px` }}
      >
        #{key}
      </Label>
    ));

    return (
      <div style={categoryStyle}>
        <Header style={{ ...headerStyle, color: color }}>
          {mainText[categoryNumber]}
          <br />
          <b style={{ fontSize: "15px", color: "black" }}>바로가기</b>
        </Header>
        <div
          style={{
            width: "90%",
            height: "50%",
            textAlign: "left",
          }}
        >
          <b style={{ fontSize: "18px" }}>Hot키워드</b>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {label}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
