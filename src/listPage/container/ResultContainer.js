import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ResultInnerContainer from "./ResultInnerContainer";

import { Grid, Icon, Header, Pagination } from "semantic-ui-react";

const imageSize = {
  width: "100%",
  height: "170px",
};

const railDiscount = {
  background: "red",
  color: "#ffffff",
  fontSize: "16px",
};

@inject("Store")
@observer
class ResultContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
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

    return (
      <Grid style={{ marginTop: "19px" }}>
        <Header
          as="h5"
          icon="search"
          content="검색결과"
          style={{ marginTop: "10px" }}
        />
        <Grid.Row columns={4}>
          <ResultInnerContainer resultList={resultList} />
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
    );
  }
}

export default ResultContainer;
