import React, { Component } from "react";
import { Grid, Card, Image, Item } from "semantic-ui-react";

class SameCategoryItemView extends Component {
  render() {
    const { selectItem } = this.props;
    return (
      <Grid >
        <Grid.Row>
          <div style={{fontWeight:"bold", fontSize:"20px"}}>
            <span style={{ color: "orange" }}>{selectItem.category}</span>
            <span>특가상품</span>
          </div>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column celled style={{ width: "20%" }}>
            <Item>
              <Image src={selectItem.imgUrl} />
              <Item.Header>dkasdfadfdk</Item.Header>
            </Item>
          </Grid.Column>
          <Grid.Column>
            <Image src={selectItem.imgUrl} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SameCategoryItemView;
