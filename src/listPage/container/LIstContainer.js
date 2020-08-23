import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import FilterContainer from "../container/FilterContainer";
import ResultContainer from "../container/ResultContainer";
import CategoryMainContainer from "../container/CategoryMainContainer";
import { inject, observer } from "mobx-react";

@withRouter
@inject("Store")
@observer
class ListContainer extends Component {
  render() {
    const urlParams = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    // 검색어가 있을 경우
    if (urlParams.search) {
      const { list } = this.props.Store;
      list.keywordSearch(urlParams.search);
    }

    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={4}>
            <p>
              <span>
                <FilterContainer />
              </span>
            </p>
          </Grid.Column>
          <Grid.Column width={12}>
            <p>
              <span>
                {/* 서브카테고리가 있는경우와 없는경우로 구분하도록 수정
                    메인페이지에서 검색 할 때 카테고리가 없는 경우도 있음.
                */}
                {urlParams.subCategory ? (
                  <ResultContainer />
                ) : (
                  <CategoryMainContainer />
                )}
              </span>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ListContainer;
