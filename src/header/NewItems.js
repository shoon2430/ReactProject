import React, { Component } from "react";
import { Message, Image, Icon, Card } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

const imageStyle = {
  width: "100%",
  height: "150px",
};

const cardStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "left",
};

@inject("Store")
@observer
class NewItems extends Component {
  starCount = (rating) => {
    let start = [];
    for (var i = 0; i < rating; i++) {
      start = start.concat(<Icon name="star" color="yellow" />);
    }
    return start;
  };

  render() {
    const { item } = this.props.Store;
    const newItemList = item.getNewSearchItems;

    let newItemListComponent = "";
    if (newItemList.length !== 0) {
      newItemListComponent = newItemList.map((item) => (
        <Card style={{ width: "190px" }} as="a" href={`/detail?id=${item.id}`}>
          <Image src={item.imgUrl} style={imageStyle} />
          <Card.Content>
            <Card.Description style={cardStyle}>
              {item.name}

              <br />
              {this.starCount(item.rating)}
            </Card.Description>
          </Card.Content>
        </Card>
      ));
    }

    return (
      <div>
        {newItemListComponent !== "" && (
          <Message style={{ width: "200px" }}>
            <Message.Header
              style={{
                textAlign: "center",
                fontSize: "23px",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              최근 본 항목
            </Message.Header>
            {newItemListComponent}
          </Message>
        )}
      </div>
    );
  }
}

export default NewItems;
