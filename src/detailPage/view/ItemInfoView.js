import React, { Component } from "react";
import {
  Grid,
  Image,
  Item,
  Card,
  Icon,
  Button,
  Label,
  Input,
} from "semantic-ui-react";
import CategoryLineContainer from "../../listPage/container/CategoryLineContainer";
import sub from "../../data/category/sub";

class ItemInfoView extends Component {
  render() {
    const {
      selectItem,
      star,
      goHome,
      onPlus,
      onMinus,
      count,
      addItemToBasket,
    } = this.props;

    return (
      <div>
        <CategoryLineContainer />
        <Grid style={{ marginTop: "10px" }}>
          <Grid.Row>
            <Grid.Column style={{ width: "50%" }}>
              <Card style={{ width: "100%" }}>
                <Card.Content style={{ fontSize: "15px" }}>
                  <Label basic as="a" href={`/`}>
                    <Icon name="home" /> 홈
                  </Label>
                  &nbsp;&nbsp;{">"}&nbsp;&nbsp;
                  <Label basic as="a" href={`/list`}>
                    {selectItem.category}
                  </Label>
                  &nbsp;&nbsp;{">"}&nbsp;&nbsp;
                  <Label basic as="a" href={`/list`}>
                    {selectItem.subCategory}
                  </Label>
                </Card.Content>
                <Card.Content extra>
                  <Image
                    src={selectItem.imgUrl}
                    wrapped
                    ui={false}
                    width="100%"
                    height="100%"
                  />
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column
              style={{ marginTop: "10px", width: "50%", lineHeight: "32px" }}
            >
              <Item.Group divided>
                <Item>
                  <Item.Content>
                    <Item.Header style={{ fontSize: "30px" }}>
                      {selectItem.name}
                    </Item.Header>
                    <Item.Description>
                      {star(selectItem.rating)}
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Meta>
                      <span style={{ fontSize: "20px" }}>
                        {selectItem.discount}%
                      </span>
                      <span
                        style={{
                          fontSize: "20px",
                          textDecoration: "line-through",
                        }}
                      >
                        &nbsp;
                        {selectItem.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </span>
                    </Item.Meta>
                    <Item.Description
                      style={{
                        color: "#B90000",
                        fontWeight: "bold",
                        marginTop: "30px",
                      }}
                    >
                      {selectItem.stock - count === 0 ? (
                        <div>
                          <span style={{ marginLeft: "10px" }}>
                            <Icon
                              disabled
                              name="level up alternate"
                              rotated="clockwise"
                              color="black"
                              size="big"
                            />
                          </span>
                          <span
                            style={{
                              textDecoration: "line-through",
                              textDecorationColor: "black",
                              fontSize: "45px",
                            }}
                          >
                            &nbsp;
                            {(
                              selectItem.price *
                              (100 - selectItem.discount) *
                              0.01
                            )
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            &nbsp;원
                            <Button
                              secondary
                              style={{ marginLeft: "3px", marginTop: "-3px" }}
                            >
                              품절
                            </Button>
                          </span>
                        </div>
                      ) : (
                        <div>
                          <span style={{ marginLeft: "10px" }}>
                            <Icon
                              disabled
                              name="level up alternate"
                              rotated="clockwise"
                              color="black"
                            />
                          </span>
                          <span style={{ fontSize: "40px" }}>
                            {(
                              selectItem.price *
                              (100 - selectItem.discount) *
                              0.01
                            )
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </span>
                          <span style={{ fontSize: "25px" }}>&nbsp;원</span>
                        </div>
                      )}
                      <div
                        style={{
                          color: "grey",
                          fontSize: "16px",
                          marginTop: "30px",
                          fontWeight: "normal",
                        }}
                      >
                        (&nbsp;재고&emsp;&emsp;{selectItem.stock - count}&nbsp;)
                      </div>
                      <div
                        style={{
                          color: "grey",
                          fontSize: "16px",
                          marginTop: "5px",
                          fontWeight: "normal",
                        }}
                      >
                        (&nbsp;판매량&emsp;{selectItem.sale}&nbsp;)
                      </div>
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Description
                      style={{ fontWeight: "bold", fontSize: "18px" }}
                    >
                      <span>배송정보&emsp;</span>
                      <span style={{ color: "green" }}>
                        {selectItem.delivery === 1 ? "무료배송" : "유료배송"}
                      </span>
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Description
                      style={{ fontWeight: "bold", fontSize: "18px" }}
                    >
                      <span>제품상태&emsp;</span>
                      <span style={{ color: "green" }}>
                        {selectItem.status === 1 ? "새 상품" : "중고상품"}
                      </span>
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content style={{ marginTop: "10px", fontSize: "16px" }}>
                    <Item.Description>제품 구매수량</Item.Description>
                    <Item.Description
                      style={{
                        marginTop: "-15px",
                        textAlignLast: "right",
                        color: "#FF6600",
                        fontWeight: "bold",
                      }}
                    >
                      {count === 0 ? (
                        <Icon
                          onClick={onMinus}
                          name="minus square outline"
                          color="grey"
                          size="big"
                        />
                      ) : (
                        <Icon
                          onClick={onMinus}
                          name="minus square outline"
                          color="orange"
                          size="big"
                        />
                      )}

                      <Input type="number" defaultValue={count} size="huge">
                        &emsp;{count}&emsp;
                      </Input>
                      {selectItem.stock === count ? (
                        <Icon
                          onClick={onPlus}
                          name="plus square outline"
                          color="grey"
                          size="big"
                        />
                      ) : (
                        <Icon
                          onClick={onPlus}
                          name="plus square outline"
                          color="orange"
                          size="big"
                        />
                      )}
                    </Item.Description>

                    <Item.Description style={{ marginTop: "20px" }}>
                      총 상품금액
                    </Item.Description>
                    <Item.Description
                      style={{
                        marginTop: "-10px",
                        textAlignLast: "right",
                        color: "#FF6600",
                        fontWeight: "bold",
                      }}
                    >
                      <span style={{ fontSize: "40px" }}>
                        {(
                          selectItem.price *
                          (100 - selectItem.discount) *
                          0.01 *
                          count
                        )
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                      <span style={{ fontSize: "20px" }}>&ensp;원</span>
                    </Item.Description>
                    <Button.Group
                      widths="2"
                      size="huge"
                      style={{ marginTop: "20px" }}
                    >
                      <Button
                        animated="vertical"
                        basic
                        color="orange"
                        onClick={() => {
                          addItemToBasket(selectItem.id, count);
                        }}
                      >
                        <Button.Content hidden>장바구니</Button.Content>
                        <Button.Content visible>
                          <Icon name="shop" />
                        </Button.Content>
                      </Button>
                      <Button
                        color="orange"
                        onClick={() => {
                          alert("바로구매");
                        }}
                      >
                        바로구매
                      </Button>
                    </Button.Group>
                  </Item.Content>
                </Item>
              </Item.Group>

              {/* <Item.Content>
              <Item.Header>{selectItem.name}</Item.Header>
              <Item.Meta>{selectItem.price}</Item.Meta>
              <Item.Description>{selectItem.stock}</Item.Description>
            </Item.Content> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      // <Segment>
      //   <Grid columns={2} relaxed="very">
      //     <Grid.Column>
      //       <Card>
      //         <Image src={selectItem.imgUrl} wrapped ui={false}/>
      //       </Card>
      //     </Grid.Column>
      //     <Grid.Column>
      //       <Item.Content>
      // <Item.Header as="a">{selectItem.name}</Item.Header>
      // <Item.Meta>{selectItem.price}</Item.Meta>
      // <Item.Description>{selectItem.stock}</Item.Description>
      //       </Item.Content>
      //     </Grid.Column>
      //   </Grid>
      // </Segment>
    );
  }
}

export default ItemInfoView;
