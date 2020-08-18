import React, { Component } from "react";
import ItemInfoContainer from "./container/ItemInfoContainer";
import SameCategoryListContainer from "./container/SameCategoryListContainer";

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
        <SameCategoryListContainer />
      </div>
    );
  }
}

export default DetailPage;
