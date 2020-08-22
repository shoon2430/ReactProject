import React, { Component } from "react";
import { Table, Image, Icon, Card, Rating } from "semantic-ui-react";

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
  render() {
    const { item } = this.props;
    return (
      <Table.Cell textAlign="center">
        <Card
          className="item"
          style={{ width: "190px" }}
          as="a"
          href={`/detail?id=${item.id}`}
        >
          <Image className="item__image" src={item.imgUrl} style={imageStyle} />
          <Card.Content>
            <Card.Description style={cardStyle}>
              <span className="item__delivery">{item.name}</span>
              <br />
              <b className="item__price" style={{ fontSize: "15px" }}>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              </b>
              <b className="item__delivery" style={{ color: "RoyalBlue" }}>
                {item.delivery === 1 ? (
                  <Icon name="truck" style={{ marginLeft: "5px" }}>
                    무료배송
                  </Icon>
                ) : (
                  ""
                )}
              </b>
              <br />
              <Rating
                className="item__rating"
                icon="star"
                defaultRating={item.rating}
                maxRating={item.rating}
              />
            </Card.Description>
          </Card.Content>
        </Card>
      </Table.Cell>
    );
  }
}

export default Item;
