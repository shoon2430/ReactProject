import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "../../mainPage/view/BestDiscountItem.css";

import {
  Grid,
  Image,
  Card,
  Icon,
  Rail,
  Label,
  Header,
} from "semantic-ui-react";

const imageSize = {
  width: "100%",
  height: "180px",
};

const railDiscount = {
  background: "red",
  color: "#ffffff",
  fontSize: "16px",
};

@inject("Store")
@observer
class ResultContainer extends Component {
  starCount = (rating) => {
    let start = [];
    for (var i = 0; i < rating; i++) {
      start = start.concat(<Icon name="star" color="yellow" />);
    }
    return start;
  };
  render() {
    const { resultList } = this.props.Store.list;
    console.log("------------------", resultList);
    const results = resultList.map((item) => {
      return (
        <Grid.Column key={item.id}>
          <Card color="orange" as="a">
            <Card.Content>
              <Card.Header
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.name}
              </Card.Header>

              <Image src={item.imgUrl} style={imageSize} />

              <Rail
                attached
                internal
                position="left"
                style={{ top: "13%", left: "10px" }}
              >
                <Label style={railDiscount}>{item.discount}%</Label>
              </Rail>
              <Card.Description style={{ color: "#3080DF" }}>
                판매수 {item.sale}
                <br />
                {this.starCount(item.rating)}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });

    return (
      <Grid style={{ margin: "0px" }}>
        <Header
          as="h4"
          icon="search"
          content="검색결과"
          style={{ marginTop: "10px" }}
        />
        <Grid.Row columns={4}>{results.slice(0, 4)}</Grid.Row>
        <Grid.Row columns={4}>{results.slice(4, 8)}</Grid.Row>
      </Grid>
    );
  }
}

export default ResultContainer;
