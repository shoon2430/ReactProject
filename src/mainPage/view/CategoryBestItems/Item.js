import React, { Component } from "react";
import { Table, Image, Icon, Card } from "semantic-ui-react";

const imageStyle = {
  width: "100%",
  height: "200px",
};

const cardStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "left",
};
class Item extends Component {
  starCount = (rating) => {
    let start = [];
    for (var i = 0; i < rating; i++) {
      start = start.concat(<Icon name="star" color="yellow" />);
    }
    return start;
  };
  render() {
    const { item } = this.props;
    return (
      <Table.Cell textAlign="center">
        <Card style={{ width: "190px" }} as="a">
          <Image src={item.imgUrl} style={imageStyle} />
          <Card.Content>
            <Card.Description style={cardStyle}>
              {item.name}
              <br />
              <b style={{ fontSize: "15px" }}>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              </b>
              <b style={{ color: "RoyalBlue" }}>
                {item.delivery === 1 ? (
                  <Icon name="truck" style={{ marginLeft: "5px" }}>
                    당일배송
                  </Icon>
                ) : (
                  ""
                )}
              </b>
              <br />
              {this.starCount(item.rating)}
            </Card.Description>
          </Card.Content>
        </Card>
      </Table.Cell>
    );
  }
}

export default Item;
