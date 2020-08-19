import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import main from "../../data/category/main";
import "react-slideshow-image/dist/styles.css";

import {
  Grid,
  Image,
  Card,
  Icon,
  Rail,
  Label,
  Header,
  Pagination,
} from "semantic-ui-react";

const imageSize = {
  width: "100%",
  height: "170px",
};

const railDiscount = {
  background: "red",
  color: "#ffffff",
  fontSize: "16px",
};

@withRouter
@inject("Store")
@observer
class CategoryMainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1, //시작페이지
    };
  }

  starCount = (rating) => {
    let start = [];
    for (var i = 0; i < rating; i++) {
      start = start.concat(<Icon name="star" color="yellow" />);
    }
    return start;
  };

  setNextPage = (e) => {
    this.setState({ page: e.target.getAttribute("value") });
  };

  resultbox = (objectlist) => {
    const result = objectlist.map((item) => {
      return (
        <Grid.Column key={item.id}>
          <Card color="#f5e5d5" as="a" href={`/detail?id=${item.id}`}>
            <Card.Content>
              <Image src={item.imgUrl} style={imageSize} />
              <Card.Header
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "17px",
                  paddingTop: "7px",
                }}
              >
                {item.name}
              </Card.Header>
              <Card.Meta>
                <span
                  style={{
                    textDecoration: "line-through",
                    textDecorationColor: "gray",
                    fontSize: "13px",
                    fontColor: "gray",
                  }}
                >
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </span>
              </Card.Meta>
              <Card.Content>
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "15px;",
                  }}
                >
                  {(item.price * (100 - item.discount) * 0.01)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  &nbsp;원
                </span>
                <span
                  style={{
                    margin: "0 left",
                    float: "right",
                  }}
                >
                  {item.delivery === 1 ? (
                    <span style={{ font: "6px" }}>
                      <Icon name="shipping fast"></Icon>무료배송
                    </span>
                  ) : (
                    ""
                  )}
                </span>
              </Card.Content>

              <Rail
                attached
                internal
                position="left"
                style={{ top: "3%", left: "-8px" }}
              >
                <Label style={railDiscount}>{item.discount}%</Label>
              </Rail>
              <Card.Description style={{ color: "#3080DF" }}>
                판매수 {item.sale}
                <br />
                {this.starCount(item.rating)}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });
    return result;
  };

  render() {
    const items = this.props.Store.list.getResultList;

    const resultList = items.slice(
      (this.state.page - 1) * 16,
      this.state.page * 16
    );

    let totalPage = Math.floor(items.length / 16);

    if (items.length % 16) {
      totalPage += 1;
    }
    const urlParams = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    const mainCategory = main.find((data) => data.value === urlParams.category);
    let bestItems = this.props.Store.item.categoryBestItemSort(resultList);

    // 가장 할인률이 높은 아이템을 BEST로
    bestItems = bestItems.sort((a, b) => {
      const d1 = a["discount"];
      const d2 = b["discount"];
      if (d1 < d2) return 1;
      if (d1 > d2) return -1;
      return 0;
    });

    const bestList = bestItems.slice(0, 3);

    return (
      <>
        <Grid style={{ marginTop: "19px" }}>
          <Header
            as="h3"
            icon="trophy"
            content={`${mainCategory ? mainCategory.text : ""} BEST`}
            style={{ marginTop: "5px" }}
          />
          <Grid.Row
            style={{ background: "#f2cb6f", width: "20px" }}
            columns={3}
          >
            {this.resultbox(bestList)}
          </Grid.Row>
          <Header
            as="h5"
            icon="search"
            content="검색결과"
            style={{ marginTop: "30px" }}
          />
          <Grid.Row style={{ margin: 0 }} columns={4}>
            {this.resultbox(resultList)}
          </Grid.Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              width: "100%",
            }}
          >
            <Pagination
              boundaryRange={0}
              defaultActivePage={1}
              ellipsisItem={null}
              firstItem={null}
              lastItem={null}
              siblingRange={2}
              onPageChange={this.setNextPage}
              totalPages={totalPage}
            />
          </div>
        </Grid>
      </>
    );
  }
}
export default CategoryMainContainer;
