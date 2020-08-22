import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class ItemPaging extends Component {
  render() {
    const { setPage, allPage, nowPage } = this.props;

    const pageList = [...Array(allPage).keys()].map((page) => (
      <Icon
        key={page}
        name="circle"
        color={page + 1 === nowPage ? "black" : "grey"}
        onClick={() => setPage(page + 1)}
      />
    ));

    return <div style={{ textAlign: "center" }}>{pageList}</div>;
  }
}

export default ItemPaging;
