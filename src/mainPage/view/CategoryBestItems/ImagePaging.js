import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class paging extends Component {
  render() {
    const { setPage, allPage, nowPage } = this.props;

    let pageList = [];
    for (var i = 1; i <= allPage; i++) {
      const color = i === nowPage ? "black" : "grey";
      pageList.push(<Icon name="circle" color={color} />);
    }

    return (
      <div style={{ textAlign: "center" }}>
        <Icon
          name="arrow left"
          onClick={() => {
            setPage(nowPage - 1 < 1 ? allPage : nowPage - 1);
          }}
        />
        {pageList}
        <Icon
          name="arrow right"
          onClick={() => {
            setPage(nowPage + 1 > allPage ? 1 : nowPage + 1);
          }}
        />
      </div>
    );
  }
}

export default paging;
