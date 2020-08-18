import React, { Component } from "react";
import ItemInfoContainer from "./container/ItemInfoContainer";
import SameCategoryItemContainer from "./container/SameCategoryItemContainer";

// const example = {
//   background: "honeydew",
//   height: "30vh",
// };

class DetailPage extends Component {
  render() {
    return (
      <div>
        {/* <div style={example} /> */}
        <ItemInfoContainer/> 
        <SameCategoryItemContainer />
        
      </div>
    );
  }
}

export default DetailPage;
