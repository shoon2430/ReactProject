import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Card, Icon, Rail, Label } from "semantic-ui-react";

const imageSize = {
  width: "100%",
  height: "170px",
};

const railDiscount = {
  background: "red",
  color: "#ffffff",
  fontSize: "16px",
};

class ResultInner extends Component {
  starCount = (rating) => {
    let start = [];
    for (var i = 0; i < rating; i++) {
      start = start.concat(<Icon name="star" color="yellow" />);
    }
    return start;
  };

  render() {
    const item = this.props.item;

    return (
      <Grid.Column key={item.id}>
        <Card color="#f5e5d5" as={Link} to={`/detail?id=${item.id}`}>
          <Card.Content>
            <Image src={item.imgUrl} style={imageSize} />
            <Card.Header
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: "17px",
                paddingTop: "7px",
              }}
            >
              {item.name}
            </Card.Header>
            <Card.Meta>
              <span
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "gray",
                  fontSize: "13px",
                  fontColor: "gray",
                }}
              >
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              </span>
            </Card.Meta>
            <Card.Content>
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "15px;",
                }}
              >
                {(item.price * (100 - item.discount) * 0.01)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                &nbsp;원
              </span>
              <span
                style={{
                  margin: "0 left",

                  float: "right",
                }}
              >
                {item.delivery === 1 ? (
                  <span style={{ font: "5px" }}>
                    <Icon name="shipping fast"></Icon>무료배송
                  </span>
                ) : (
                  ""
                )}
              </span>
            </Card.Content>

            <Rail
              attached
              internal
              position="left"
              style={{ top: "3%", left: "-8px" }}
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
  }
}

export default ResultInner;
