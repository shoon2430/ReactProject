import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import SameCategoryListView from "../view/RecommendListView";

@inject("Store")
@observer
class SameCategoryItemContainer extends Component {
    render() {
        const { detail } = this.props.Store;
        return (
            <SameCategoryListView selectItem={detail.selectItem}/>
        );
    }
}

export default SameCategoryItemContainer;