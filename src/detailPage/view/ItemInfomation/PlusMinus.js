import React, { Component } from "react";
import { Item, Icon, Input } from "semantic-ui-react";

class PlusMinus extends Component {
  render() {
    const { selectItem, count, onMinus, onPlus } = this.props;

    return (
      <Item.Description
        style={{
          marginTop: "-15px",
          textAlignLast: "right",
          color: "#FF6600",
          fontWeight: "bold",
        }}
      >
        {/* 선택한 수량이 0이면 수량을 더 이상 뺄 수 없다 */}
        {count === 0 ? (
          <Icon
            onClick={onMinus}
            name="minus square outline"
            color="grey"
            size="big"
          />
        ) : (
          // 선택한 수량이 0이 아니면 수량을 뺄 수 있다
          <Icon
            onClick={onMinus}
            name="minus square outline"
            color="orange"
            size="big"
          />
        )}
        {/* 선택된 수량을 보여줌 */}
        <Input type="number" defaultValue={count} size="huge">
          &emsp;{count}&emsp;
        </Input>
        {/* 선택한 수량이 남아있는 재고량과 같으면 더 이상 수량을 추가할 수 없다 */}
        {selectItem.stock === count ? (
          <Icon
            onClick={onPlus}
            name="plus square outline"
            color="grey"
            size="big"
          />
        ) : (
          // 선택한 수량이 남아있는 재고량과 같지 않으면 수량을 추가할 수 있다
          <Icon
            onClick={onPlus}
            name="plus square outline"
            color="orange"
            size="big"
          />
        )}
      </Item.Description>
    );
  }
}

export default PlusMinus;
