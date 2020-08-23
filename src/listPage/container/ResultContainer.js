import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Result from "../view/Result";
import ResultInner from "../view/ResultInner";

@inject("Store")
@observer
class ResultContainer extends Component {
  render() {
    const items = this.props.Store.list.getResultList;

    return (
      <div>
        <Result items={items} />
      </div>
    );
  }
}

export default ResultContainer;
