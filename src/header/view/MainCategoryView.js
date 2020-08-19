import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import main from "../../data/category/main";
import sub from "../../data/category/sub";
import { Link } from "react-router-dom";

//import MainCategoryBox from "./MainSubCategoryView";

const headerMenu = {
  marginRight: "30px",
  width: "120px",
  height: "115px",
  background: "#ffb74d",
  display: "top",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
};
const headerDropdown = {
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

    for (let i = 0; i < main.length; i++) {
      let subList = sub.filter((subObj) => subObj.main === main[i].value);
      let dropdownList = [];
      subList.map((subListObj) =>
        dropdownList.push(
          <Dropdown.Item
            text={subListObj.text}
            as={Link}
            to={`/list?category=${main[i].value}&subCategory=${subListObj.value}`}
          />
        )
      );
      list.push(
        <Dropdown item simple text={main[i].text} style={{ width: "150px" }}>
          <Dropdown.Menu>{dropdownList}</Dropdown.Menu>
        </Dropdown>
      );
    }
    return list;
  };
  render() {
    return (
      <Menu style={headerMenu}>
        <Dropdown item icon={hearDropdownicon} style={headerDropdown}>
          <Dropdown.Menu>{this.innerDrop()}</Dropdown.Menu>
        </Dropdown>
      </Menu>
    );
  }
}

export default CategoryView;
