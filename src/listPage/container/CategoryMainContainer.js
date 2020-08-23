import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import main from "../../data/category/main";
import "react-slideshow-image/dist/styles.css";
import ResultInner from "../view/ResultInner";

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

  setNextPage = (e) => {
    this.setState({ page: e.target.getAttribute("value") });
  };

  resultbox = (objectlist) => {
    const result = objectlist.map((item) => {
      return <ResultInner item={item} />;
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

    const sortObj = [
      {
        key: "rating",
        option: 1,
      },
      {
        key: "discount",
        option: 1,
      },
    ];

    const bestItems = this.props.Store.item.categoryItemSort(
      resultList,
      sortObj
    );

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
