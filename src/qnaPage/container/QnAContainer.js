import React, { Component } from "react";
import QnAPage from "../view/QnAPage";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
class QnAContainer extends Component {
  render() {
    return (
      <div>
        <Menu>
          <Menu.Item>
            고객센터
            <Dropdown>
              <Dropdown.Menu>
                <Dropdown.Item
                  text="자주묻는질문"
                  as={Link}
                  to={`/qna/often`}
                ></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default QnAContainer;
