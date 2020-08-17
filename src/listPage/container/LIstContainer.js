import React, { Component } from "react";
import { Grid, List } from "semantic-ui-react";
import FilterContainer from "./FilterContainer";
import ResultContainer from "./ResultContainer";

class ListContainer extends Component {
  render() {
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
                <ResultContainer />
              </span>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ListContainer;
