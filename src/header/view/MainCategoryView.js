import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import main from "../../data/category/main";
import sub from "../../data/category/sub";

//import MainCategoryBox from "./MainSubCategoryView";

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
  innerDrop = () => {
    let list = [];
    let subList = [];
    for (let i = 0; i < main.length; i++) {
      subList = sub.filter((data) => data.main === main[i].value);
      console.log("------sublist---", subList);
      list = list.concat(
        <Dropdown.Item>
          {main[i].text}
          <Dropdown
            pointing="left"
            className="link item"
            options={subList[i].text}
          />
        </Dropdown.Item>
      );
      return list;
    }
  };
  render() {
    return (
      <Dropdown
        icon={hearDropdownicon}
        style={headerDropdown}
        className="link item"
      >
        <Dropdown.Menu>{this.innerDrop()}</Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default CategoryView;
