import React, { Component } from "react";
import { Image, Card, Rating, Rail, Label } from "semantic-ui-react";

const imageStyle = {
  width: "100%",
  height: "160px",
};

const cardStyle = {
  marginTop: "15px",
};

const cardDescriptionStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "left",
};

class RecentlyViewedItem extends Component {
  render() {
    const { item, removeNewSearchItems } = this.props;
    return (
      <Card style={cardStyle}>
        <Image
          src={item.imgUrl}
          style={imageStyle}
          as="a"
          href={`/detail?id=${item.id}`}
        />
        <Card.Content>
          <Card.Description style={cardDescriptionStyle}>
            {item.name}
            <br />
            <Rating
              disabled="true"
              className="item__rating"
              icon="star"
              defaultRating={item.rating}
              maxRating={5}
            />
          </Card.Description>
        </Card.Content>
        <Rail
          attached
          internal
          position="left"
          style={{ top: "0px", left: "130px" }}
        >
          <Label
            as="a"
            onClick={() => {
              removeNewSearchItems(item.id);
            }}
            style={{ background: "#F32020", color: "white", zIndex: "10" }}
          >
            X
          </Label>
        </Rail>
      </Card>
    );
  }
}

export default RecentlyViewedItem;
