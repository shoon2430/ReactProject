import React, { Component } from "react";
import { Table } from "semantic-ui-react";

const categoryItemTable = {
  height: "500px",
  background: "Cornsilk",
};

const categoryItemImage = {
  width: "320px",
};

class CategoryBestItem extends Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Table celled structured style={categoryItemTable}>
          <Table.Body>
            <Table.Row>
              <Table.Cell rowSpan="2" textAlign="center">
                item
              </Table.Cell>
              <Table.Cell
                rowSpan="2"
                textAlign="center"
                style={categoryItemImage}
              >
                image
              </Table.Cell>
              <Table.Cell textAlign="center">item1</Table.Cell>
              <Table.Cell textAlign="center">item2</Table.Cell>
              <Table.Cell textAlign="center">item3</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">item4</Table.Cell>
              <Table.Cell textAlign="center">item5</Table.Cell>
              <Table.Cell textAlign="center">item6</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default CategoryBestItem;
