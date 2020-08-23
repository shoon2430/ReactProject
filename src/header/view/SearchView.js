import React, { Component } from "react";
import { Input, Dropdown, Button, Label, Icon } from "semantic-ui-react";

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
  width: "60px",
};

class SearchView extends Component {
  render() {
    const {
      mainCategoryList,
      onInputText,
      onSearch,
      selectOpt,
      optName,
    } = this.props;

    let dropList = mainCategoryList.map((data) => {
      return (
        <Dropdown.Item
          text={data.text}
          onClick={() => selectOpt(data.value, data.text)}
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
          <Dropdown text={optName} style={{ width: "120px" }} fluid>
            <Dropdown.Menu>{dropList}</Dropdown.Menu>
          </Dropdown>
        </Label>
        <input onKeypress={(e) => (e.keyCode === "13" ? onSearch() : null)} />
        <Button
          basic
          style={headerSearchButton}
          onClick={() => onSearch()}
          as="a"
        >
          <Icon name="search" style={{ margin: "1.5px", marginTop: "7px" }} />
        </Button>
      </Input>
    );
  }
}

export default SearchView;
