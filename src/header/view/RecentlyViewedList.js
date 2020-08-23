import React, { Component } from "react";
import { Message } from "semantic-ui-react";

const recentlyViewedListStyle = {
  position: "fixed",
  maxHeight: "758px",
  top: "13%",
  left: "81%",
  zIndex: "10",
  overflow: "auto",
  overflowX: "hidden",
};

class RecentlyViewedList extends Component {
  render() {
    const { recentlyViewedItems } = this.props;

    return (
      <div className="recentlyViewed" style={recentlyViewedListStyle}>
        {recentlyViewedItems.length !== 0 && (
          <Message style={{ width: "200px" }}>
            <Message.Header
              style={{
                textAlign: "center",
                fontSize: "21px",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              최근 조회 상품
            </Message.Header>
            {recentlyViewedItems}
          </Message>
        )}
      </div>
    );
  }
}

export default RecentlyViewedList;
