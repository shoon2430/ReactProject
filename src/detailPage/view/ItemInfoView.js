import React, { Component } from "react";
import {
  Grid,
  Image,
  Item,
  Card,
  Icon,
  Button,
  Input,
} from "semantic-ui-react";
import CategoryLineContainer from "../../listPage/container/CategoryLineContainer";
import Price from "./ItemInfomation/Price";
import ItemTitle from "./ItemInfomation/ItemTitle";
import PlusMinus from "./ItemInfomation/PlusMinus";
// import PlusMinus from "./ItemInfomation/PlusMinus";

// 제품의 상세 정보를 보여줌
class ItemInfoView extends Component {
  render() {
    const { selectItem, onPlus, onMinus, count, addItemToBasket } = this.props;

    return (
      <div>
        <CategoryLineContainer />
        <Grid style={{ marginTop: "15px" }}>
          <Grid.Row>
            {/* 화면 왼쪽에는 제품의 이미지 */}
            <Grid.Column style={{ width: "50%" }}>
              <Card style={{ width: "100%" }}>
                <Image
                  src={selectItem.imgUrl}
                  wrapped
                  ui={false}
                  width="100%"
                  height="100%"
                />
              </Card>
            </Grid.Column>
            {/* 화면 우측에는 제품의 상세 정보 */}
            <Grid.Column style={{ width: "50%", lineHeight: "32px" }}>
              <Item.Group divided>
                {/* 제품의 이름, 별점 뷰를 불러옴 */}
                <ItemTitle
                  selectItem={selectItem}
                  titleFontSize={"30px"}
                  width={"100%"}
                  overflow={""}
                  textOverflow={""}
                  whiteSpace={""}
                />
                {/* 제품의 가격 뷰를 불러옴 */}
                <Price
                  selectItem={selectItem}
                  count={count}
                  beforePriceFontSize={"20px"}
                  priceFontSize={"45px"}
                  wonFontSize={"25px"}
                  priceMarginTop={"30px"}
                />
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
                    <PlusMinus
                      selectItem={selectItem}
                      count={count}
                      onMinus={onMinus}
                      onPlus={onPlus}
                    />
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ItemInfoView;
