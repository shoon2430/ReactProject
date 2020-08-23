import React, { Component } from "react";
import { Item, Rating } from "semantic-ui-react";

class ItemTitle extends Component {
  render() {
    const {
      selectItem,
      titleFontSize,
      width,
      textOverflow,
      overflow,
      whiteSpace,
    } = this.props;

    return (
      <Item>
        <Item.Content>
          <Item.Header
            style={{
              width: width,
              fontSize: titleFontSize,
              overflow: overflow,
              textOverflow: textOverflow,
              whiteSpace: whiteSpace,
              //   height: "20px",
            }}
          >
            {selectItem.name}
          </Item.Header>
          <Item.Description>
            <Rating
              icon="star"
              defaultRating={selectItem.rating}
              maxRating={5}
              disabled
              size="huge"
            />
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default ItemTitle;
