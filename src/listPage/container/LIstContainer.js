import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import FilterContainer from "./FilterContainer";
import ResultContainer from "./ResultContainer";
import CategoryMainContainer from "./CategoryMainContainer";

@withRouter
class ListContainer extends Component {
  render() {
    const urlParams = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

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
                {urlParams.category && !urlParams.subCategory ? (
                  <CategoryMainContainer />
                ) : (
                  <ResultContainer />
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
