import React, { Component } from "react";
import { Input, Dropdown, Button, Label } from "semantic-ui-react";
import main from "../../data/category/main";
import sub from "../../data/category/sub";
import { Link } from "react-router-dom";

const options = [
  { key: "all", text: "All", value: "all" },
  { key: "articles", text: "Articles", value: "articles" },
  { key: "products", text: "Products", value: "products" },
];

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
    let optList = [{ key: 0, text: "All", value: "All" }];
    main.map((obj) => optList.push(obj));
    const { onInputText } = this.props;
    return (
      <Input
        labelPosition="right"
        type="text"
        placeholder="Search"
        style={headerInput}
        onChange={onInputText}
      >
        <Label style={headerInputDropbox} basic>
          <Dropdown
            selection
            options={optList}
            defaultValue={optList[0].text}
          ></Dropdown>
        </Label>
        <input />
        <Button
          icon="search"
          style={headerSearchButton}
          // onClick={() => {
          //   alert("검색!");
          // }}
          as="a"
          // href={`/list?category=${main[i].value}`}
        ></Button>
      </Input>
    );
  }
}

export default SearchView;
