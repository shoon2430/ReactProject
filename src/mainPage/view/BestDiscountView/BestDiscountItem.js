import React, { Component } from "react";
import { Grid, Image, Card, Rail, Label, Rating } from "semantic-ui-react";

const imageSize = {
  width: "100%",
  height: "254px",
};

const railDiscount = {
  background: "red",
  color: "#ffffff",
  fontSize: "16px",
};

class BestDiscountItem extends Component {
  render() {
    const { bestDiscountItem } = this.props;

    return (
      <Grid.Column key={bestDiscountItem.id}>
        <Card color="orange" as="a" href={`/detail?id=${bestDiscountItem.id}`}>
          <Card.Content>
            <Card.Header
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {bestDiscountItem.name}
            </Card.Header>

            <Image src={bestDiscountItem.imgUrl} style={imageSize} />

            <Rail
              attached
              internal
              position="left"
              style={{ top: "13%", left: "10px" }}
            >
              <Label style={railDiscount}>{bestDiscountItem.discount}%</Label>
            </Rail>
            <Card.Description style={{ color: "#3080DF" }}>
              판매수 {bestDiscountItem.sale}
              <br />
              <Rating
                icon="star"
                defaultRating={bestDiscountItem.rating}
                maxRating={bestDiscountItem.rating}
              />
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default BestDiscountItem;
