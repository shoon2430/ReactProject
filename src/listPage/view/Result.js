import React, { Component } from 'react';
import ResultInner from './ResultInner';
import { Grid,  Header, Pagination } from "semantic-ui-react";

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    };
  }

  setNextPage = (e) => {
    this.setState({ page: e.target.getAttribute("value") });
  };

  render() {
  const items = this.props.items;

    let resultList = items.slice(
      (this.state.page - 1) * 16,
      this.state.page * 16
    );

    let resultInner = resultList.map((item) => <ResultInner item={item} />);

    let totalPage = Math.floor(items.length / 16);

    if (items.length % 16) {
      totalPage += 1;
    }

    return (
      <div>
        <Grid style={{ marginTop: "19px" }}>
          <Header
            as="h5"
            icon="search"
            content="검색결과"
            style={{ marginTop: "10px" }}
          />
          <Grid.Row columns={4}>
            {resultInner}
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
      </div>
    );
  }
}

export default Result;