import React, { Component } from "react";
import ItemInfoContainer from "./container/ItemInfoContainer";
import RecommendContainer from "./container/RecommendContainer";

// const example = {
//   background: "honeydew",
//   height: "30vh",
// };

class DetailPage extends Component {
  render() {
    return (
      <div>
        {/* <div style={example} /> */}
        <ItemInfoContainer />
        <RecommendContainer />
      </div>
    );
  }
}

export default DetailPage;
