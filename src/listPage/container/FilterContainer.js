import React, { Component } from "react";
import { inject, observer } from "mobx-react";

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

@inject("Store")
@observer
class FilterContainer extends Component {
  //router 적용시 바꿔줘야할 부분
  mainCategory = "CATCLO";

  //
  state = {
    min: "",
    max: "",
  };
  //
  minChange = (e) => {
    this.setState({
      min: e.target.value,
    });
    //alert(this.state.min);
  };

  maxChange = (e) => {
    this.setState({
      max: e.target.value,
    });
    //alert(this.state.max);
  };

  //
  filterPrice = (min, max) => {
    console.log("filterPrice", min, max);
    if (min === "" || max === "") {
      alert("최소값, 최대값을 모두 입력하세요");
    } else {
      this.props.Store.list.setCategoryObject();
      this.props.Store.list.filterPrice(min, max);
    }
  };

  filterRating = () => {
    let stars = [];

    for (var i = 5; i > 0; i--) {
      for (var j = 0; j < 5; j++) {
        stars =
          i > j
            ? stars.concat(<Icon name="star" color="yellow" />)
            : stars.concat(<Icon name="star" color="grey" />);
      }
      stars = stars.concat(
        <span onClick={this.props.Store.list.filterCategory("rating", i)}>
          {i}점
        </span>
      );
      stars = stars.concat(<br />);
    }

    return stars;
  };
  render() {
    return (
      <Container style={{ border: "1px solid black" }}>
        <Segment>
          <Header as="h5">배송방법</Header>
          <Checkbox
            label={{ children: "무료배송" }}
            name="delivery"
            value="1"
          />
          <br />
          <Checkbox
            label={{ children: "유료배송" }}
            name="delivery"
            value="0"
          />
          <Divider section />
          <Header as="h5">상품 상태</Header>
          <Checkbox label={{ children: "새상품" }} name="status" value="1" />
          <br />
          <Checkbox label={{ children: "중고상품" }} name="status" value="0" />
          <Divider section />
          <Header as="h5">품절된 상품 보지않기</Header>
          <Checkbox toggle name="stockZero" value="1" />
          <Divider section />
          <Header as="h5">가격 범위</Header>
          최소 :
          <Input size="mini" onChange={this.minChange} />
          <br />
          최대 :
          <Input size="mini" onChange={this.maxChange} />
          <Button
            icon="search"
            size="tiny"
            onClick={(e) => this.filterPrice(this.state.min, this.state.max)}
          ></Button>
          <Divider section />
          <Header as="h5">평점</Header>
          <List>{this.filterRating()}</List>
        </Segment>
      </Container>
    );
  }
}

export default FilterContainer;
