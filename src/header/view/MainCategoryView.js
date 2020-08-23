import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

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

class MainCategoryView extends Component {
  /* 드롭박스 생성 함수
     메인카테고리 리스트와 서브카테고리 리스트 데이터를 가지고
     드롭박스를 생성한다. */
  createInnerDrop = () => {
    const { MainCategorys, subCategorys } = this.props;

    const innerDrop = MainCategorys.map((mainObj) => {
      const subCategoryList = subCategorys.map((subObj) =>
        subObj.main === mainObj.value ? (
          <Dropdown.Item
            key={subObj.key}
            text={subObj.text}
            as={Link}
            to={`/list?category=${mainObj.value}&subCategory=${subObj.value}`}
          />
        ) : null
      );

      return (
        <Dropdown
          item
          simple
          key={mainObj.key}
          text={mainObj.text}
          style={{ width: "150px" }}
        >
          <Dropdown.Menu>{subCategoryList}</Dropdown.Menu>
        </Dropdown>
      );
    });

    return innerDrop;
  };

  render() {
    return (
      <Menu style={headerMenu}>
        <Dropdown item icon={hearDropdownicon} style={headerDropdown}>
          <Dropdown.Menu>{this.createInnerDrop()}</Dropdown.Menu>
        </Dropdown>
      </Menu>
    );
  }
}

export default MainCategoryView;
