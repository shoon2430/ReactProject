import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

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

// 드롭박스 아이템 리스트
const options = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
  },
];

class CategoryView extends Component {
  render() {
    return (
      <Dropdown
        icon={hearDropdownicon}
        style={headerDropdown}
        simple
        item
        options={options}
      ></Dropdown>
    );
  }
}

export default CategoryView;
