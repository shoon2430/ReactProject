import React, { Component } from "react";
import { Input, Dropdown, Button, Label, Icon } from "semantic-ui-react";

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
    return (
      <Input
        labelPosition="right"
        type="text"
        placeholder="Search"
        style={headerInput}
        onChange={() => {
          console.log("검색어가 입력되고 있습니다.");
        }}
      >
        <Label style={headerInputDropbox}>
          <Dropdown text="All" options={options} floating />
        </Label>
        <input />
        <Button
          icon="search"
          style={headerSearchButton}
          onClick={() => {
            alert("검색!");
          }}
        ></Button>
      </Input>
    );
  }
}

export default SearchView;
