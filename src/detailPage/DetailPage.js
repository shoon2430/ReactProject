import React, { Component } from "react";
import ItemInfoContainer from "./container/ItemInfoContainer";
import RecommendContainer from "./container/RecommendContainer";

class DetailPage extends Component {
  render() {
    return (
      <div>
        <ItemInfoContainer />
        <RecommendContainer />
      </div>
    );
  }
}

export default DetailPage;
