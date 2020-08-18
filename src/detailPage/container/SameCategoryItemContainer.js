import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import SameCategoryItemView from "../view/SameCategoryItemView";

@inject("Store")
@observer
class SameCategoryItemContainer extends Component {
    render() {
        const { detail } = this.props.Store;
        return (
            <SameCategoryItemView selectItem={detail.selectItem}/>
        );
    }
}

export default SameCategoryItemContainer;