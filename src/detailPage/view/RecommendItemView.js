import React, { Component } from "react";
import { Item, Image, Grid} from "semantic-ui-react";

class RecommendItemView extends Component {
  render() {
    const { selectItem } = this.props;

    return (
        <Grid.Column celled style={{ width: "20%" }}>

      <Item>
        <Image src={selectItem.imgUrl} />
        <Item.Group style={{ textAlign: "center" }}>
          <Item.Header>이름이름</Item.Header>
          <Item.Content>가격가격</Item.Content>
          <Item.Content>별점별점</Item.Content>
        </Item.Group>
      </Item>
      </Grid.Column>
    );
  }
}

export default RecommendItemView;
