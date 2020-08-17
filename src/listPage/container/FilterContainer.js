import React, { Component } from "react";
import {
  Input,
  Icon,
  Button,
  Segment,
  Header,
  Divider,
  Checkbox,
  List,
  Container,
} from "semantic-ui-react";

class FilterContainer extends Component {

  render() {
    return (
      <Container style={{ border: "1px solid black" }}>
        <Segment>
          <Header as="h5">배송방법</Header>
          <Checkbox label={{ children: "무료배송" }} value="1" />
          <br />
          <Checkbox label={{ children: "유료배송" }} value="1" />
          <Divider section />
          <Header as="h5">품절된 상품 보지않기</Header>
          <Checkbox toggle name="stockZero" value="1" />
          <Divider section />
          <Header as="h5">가격 범위</Header>
          최소 :<Input size="mini" />
          <br />
          최대 :<Input size="mini" />
          <Button icon="search" size="tiny"></Button>
          <Divider section />
          <Header as="h5">평점</Header>
          <List></List>
        </Segment>
      </Container>
    );
  }
}

export default FilterContainer;
