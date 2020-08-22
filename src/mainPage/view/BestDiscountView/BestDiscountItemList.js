import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

// BEST상품리스트 조회
class BestDiscountItemList extends Component {
  render() {
    const { bestDiscountItems } = this.props;

    return (
      <Grid style={{ margin: "0px" }}>
        <Header
          as="h2"
          icon="shopping bag"
          content="베스트 상품"
          style={{ marginTop: "10px" }}
        />
        <Grid.Row columns={4}>{bestDiscountItems.slice(0, 4)}</Grid.Row>
        <Grid.Row columns={4}>{bestDiscountItems.slice(4, 8)}</Grid.Row>
      </Grid>
    );
  }
}

export default BestDiscountItemList;
