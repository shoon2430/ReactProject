import React, { Component } from "react";
import ListContainer from "../container/ListContainer";
import CategoryLineContainer from "../container/CategoryLineContainer";

class ListPage extends Component {
  render() {
    return (
      <div>
        <CategoryLineContainer />
        <ListContainer />
      </div>
    );
  }
}

export default ListPage;
