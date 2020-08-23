import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
class QnAContainer extends Component {
  render() {
    return (
      <div>
        <Dropdown
          item
          simple
          text="고객센터"
          style={{ widht: "10px", height: "5px" }}
        >
          <Dropdown.Menu style={{ marginTop: "20px" }}>
            <Dropdown.Item
              text="1:1고객센터"
              as={Link}
              to={`/qna/1to1`}
            ></Dropdown.Item>
            <Dropdown.Item
              text="고객게시판"
              as={Link}
              to={`/qna/userboard`}
            ></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default QnAContainer;
