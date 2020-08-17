import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import main from "../../data/category/main";
import sub from "../../data/category/sub";

const headerDropdown = {
  marginRight: "30px",
  width: "120px",
  height: "115px",
  background: "#ffb74d",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// 시멘틱 ui 아이콘 정보
const hearDropdownicon = {
  name: "sidebar",
  size: "big",
  color: "grey",
};

class CategoryView extends Component {
  render() {
    // const mainCategoryList = this.props.mainCategoryList.map(main, key)=>{
    //   return <Dropdown
    // }
    return (
      <Dropdown
        icon={hearDropdownicon}
        style={headerDropdown}
        simple
        item
        options={main}
      ></Dropdown>
    );
  }
}

export default CategoryView;
