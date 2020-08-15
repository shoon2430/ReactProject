import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const headerDropdown = {
  width: "30px",
  height: "30px",
};

// 시멘틱 ui 아이콘 정보
const hearDropdownicon = {
  name: "bars",
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
      <Dropdown icon={hearDropdownicon} style={headerDropdown}>
        <Dropdown.Menu>
          <Dropdown.Divider />
          <Dropdown.Header icon={hearDropdownicon} content="category" />
          <Dropdown.Menu scrolling>
            {options.map((option) => (
              <Dropdown.Item key={option.value} {...option} />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default CategoryView;
