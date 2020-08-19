import React, { Component } from "react";
import { Input, Dropdown, Button, Label } from "semantic-ui-react";
import main from "../../data/category/main";
import sub from "../../data/category/sub";
import { Link } from "react-router-dom";

// const options = [
//   { key: "all", text: "All", value: "all" },
//   { key: "articles", text: "Articles", value: "articles" },
//   { key: "products", text: "Products", value: "products" },
// ];

const headerInput = {
  width: "64%",
  height: "50px",
};

const headerInputDropbox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const headerSearchButton = {
  marginLeft: "-2px",
  width: "50px",
};

class SearchView extends Component {
  render() {
    const { onInputText, onSearch, selectOpt } = this.props;

    let optList = [{ key: 0, text: "All", value: "" }];
    main.map((obj) => optList.push(obj));
    let dropList = optList.map((data) => {
      return (
        <Dropdown.Item
          text={data.text}
          onClick={() => selectOpt(data.value)}
        ></Dropdown.Item>
      );
    });

    return (
      <Input
        labelPosition="right"
        type="text"
        placeholder="Search"
        style={headerInput}
        onChange={(e) => onInputText(e)}
      >
        <Label style={headerInputDropbox} basic>
          <Dropdown>
            <Dropdown.Menu>{dropList}</Dropdown.Menu>
          </Dropdown>
        </Label>
        <input />
        <Button
          icon="search"
          style={headerSearchButton}
          onClick={() => onSearch()}
          as="a"
          // href={`/list?category=${main[i].value}`}
        ></Button>
      </Input>
    );
  }
}

export default SearchView;
