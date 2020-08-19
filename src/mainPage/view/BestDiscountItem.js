import React, { Component } from "react";
import {
  Grid,
  Image,
  Card,
  Icon,
  Rail,
  Label,
  Header,
} from "semantic-ui-react";
import "./BestDiscountItem.css";

const imageSize = {
  width: "100%",
  height: "254px",
};

const railDiscount = {
  background: "red",
  color: "#ffffff",
  fontSize: "16px",
};

// BEST상품을 조회하는 View
class BestDiscountItem extends Component {
  starCount = (rating) => {
    let start = [];
    for (var i = 0; i < rating; i++) {
      start = start.concat(<Icon name="star" color="yellow" />);
    }
    return start;
  };
  render() {
    const { bestDiscountItems } = this.props;
    const bestDiscountItemList = bestDiscountItems.map((item) => {
      return (
        <Grid.Column key={item.id}>
          <Card color="orange" as="a" href={`/detail?id=${item.id}`}>
            <Card.Content>
              <Card.Header
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.name}
              </Card.Header>

              <Image src={item.imgUrl} style={imageSize} />

              <Rail
                attached
                internal
                position="left"
                style={{ top: "13%", left: "10px" }}
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

    return (
      <Grid style={{ margin: "0px" }}>
        <Header
          as="h2"
          icon="shopping bag"
          content="베스트 상품"
          style={{ marginTop: "10px" }}
        />
        <Grid.Row columns={4}>{bestDiscountItemList.slice(0, 4)}</Grid.Row>
        <Grid.Row columns={4}>{bestDiscountItemList.slice(4, 8)}</Grid.Row>
      </Grid>
    );
  }
}

export default BestDiscountItem;
