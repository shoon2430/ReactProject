import React, { Component } from "react";
import { Table, Image } from "semantic-ui-react";

import ImagePaging from "./CategoryBestItems/ImagePaging";
import ItemPaging from "./CategoryBestItems/ItemPaging";
import Item from "./CategoryBestItems/Item";
import Category from "./CategoryBestItems/Category";
import Advertising from "./CategoryBestItems/Advertising";

const categoryItemTable = {
  height: "500px",
};

const categoryItemImage = {
  width: "30%",
};

class CategoryBestItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      itemPage: 1,

      imagePage: 1,
      imagePageTimeOutID: "",
    };
  }

  setItemPage = (page) => {
    this.setState({ itemPage: page, imagePage: 1 });
  };

  setImagePage = (page) => {
    this.setState({ imagePage: page });
  };

  setImagePageTimeOutID = (timeoutID) => {
    this.setState({ imagePageTimeOutID: timeoutID });
  };

  render() {
    let showItems = this.state.items[this.state.itemPage];
    showItems = showItems.map((item) => <Item item={item} />);

    return (
      <div style={{ margin: "5px" }}>
        <Table
          celled
          structured
          style={categoryItemTable}
          color={this.props.color}
        >
          <Table.Body>
            <Table.Row>
              <Table.Cell
                rowSpan="3"
                textAlign="center"
                style={{ width: "15%" }}
              >
                {/* A part */}
                <Category
                  category={this.props.category}
                  color={this.props.color}
                />
              </Table.Cell>
              <Table.Cell
                rowSpan="2"
                textAlign="center"
                style={categoryItemImage}
              >
                {/* B part */}
                <Image
                  src={
                    this.state.items[this.state.itemPage][
                      this.state.imagePage - 1
                    ].imgUrl
                  }
                  style={{ width: "100%", height: "80%" }}
                />
              </Table.Cell>
              {showItems.slice(0, 3)}
            </Table.Row>
            <Table.Row>{showItems.slice(3, 6)}</Table.Row>
            <Table.Row>
              <Table.Cell>
                <ImagePaging
                  setPage={this.setImagePage}
                  allPage={showItems.length}
                  nowPage={this.state.imagePage}
                />
              </Table.Cell>
              <Table.Cell colSpan="3">
                <ItemPaging
                  setPage={this.setItemPage}
                  allPage={Object.keys(this.state.items).length}
                  nowPage={this.state.itemPage}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Advertising category={this.props.category} />
      </div>
    );
  }
}

export default CategoryBestItem;
