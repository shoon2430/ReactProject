import React, { Component } from "react";
import {
  Menu,
  Header,
  Container,
} from "semantic-ui-react";
class QnASidebar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu fluid vertical tabular>
          <Menu.Item
            name="promotions"
            active={activeItem === "promotions"}
            onClick={this.handleItemClick}
          >
            <Header as="h4">Promotions</Header>
            <p>Check out our new promotions</p>
          </Menu.Item>

          <Menu.Item
            name="coupons"
            active={activeItem === "coupons"}
            onClick={this.handleItemClick}
          >
            <Header as="h4">Coupons</Header>
            <p>Check out our collection of coupons</p>
          </Menu.Item>

          <Menu.Item
            name="rebates"
            active={activeItem === "rebates"}
            onClick={this.handleItemClick}
          >
            <Header as="h4">Rebates</Header>
            <p>Visit our rebate forum for information on claiming rebates</p>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default QnASidebar;
