import React, { Component } from "react";
import { Table } from "semantic-ui-react";

import ItemPaging from "./ItemPaging";
import Item from "./Item";
import Category from "./Category";
import Advertising from "./Advertising";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const categoryItemTable = {
  height: "500px",
};

const categoryItemImage = {
  width: "30%",
};

class CategoryBestItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      itemPage: 1,
    };
  }

  setItemPage = (page) => {
    this.setState({ itemPage: page });
  };

  render() {
    // 카테고리 리스트 컴포넌트에 사용되는 아이템 데이터 가져옴
    const showItems = this.state.items[this.state.itemPage];

    // 카테고리 리스트 컴포넌트에 사용되는 아이템 컴포넌트 생성
    const showItemComponents = showItems.map((item) => (
      <Item key={item.id} item={item} />
    ));

    // 리액트 슬라이드 쇼 적용
    const slides = showItems.map((item) => (
      <div className="each-slide">
        <a href={`/detail?id=${item.id}`}>
          <div
            style={{
              backgroundImage: `url(${item.imgUrl})`,
              width: "300px",
              height: "300px",
              backgroundSize: "cover",
            }}
          ></div>
        </a>
      </div>
    ));

    return (
      <div style={{ margin: "5px" }}>
        <Table
          celled
          structured
          style={categoryItemTable}
          color={this.props.color}
        >
          <Table.Body>
            <Table.Row>
              <Table.Cell
                rowSpan="3"
                textAlign="center"
                style={{ width: "15%" }}
              >
                {/* A part */}
                <Category
                  category={this.props.category}
                  color={this.props.color}
                />
              </Table.Cell>
              <Table.Cell
                rowSpan="3"
                textAlign="center"
                style={categoryItemImage}
              >
                {/* B part */}
                <div
                  className="slide-container"
                  style={{ width: "300px", height: "300px" }}
                >
                  <Slide>{slides}</Slide>
                </div>
              </Table.Cell>
              {showItemComponents.slice(0, 3)}
            </Table.Row>
            <Table.Row>{showItemComponents.slice(3, 6)}</Table.Row>
            <Table.Row>
              <Table.Cell colSpan="3">
                <ItemPaging
                  setPage={this.setItemPage}
                  allPage={Object.keys(this.state.items).length}
                  nowPage={this.state.itemPage}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Advertising category={this.props.category} />
      </div>
    );
  }
}

export default CategoryBestItemList;
