import React, { Component } from "react";
import sub from "../../data/category/sub";
import { List } from "semantic-ui-react";

class SubCategoryBox extends Component {
  render() {
    const { main } = this.props;
    let list = [];
    let subCategoryList = sub.filter((data) => data.main === main);
    console.log("subcateList", subCategoryList);
    for (var i = 0; i < subCategoryList.length; i++) {
      list = list.concat(
        <List.Item
          content={
            <a
              href={`/list?category=${main}&subCategory=${subCategoryList[i].value}`}
            >
              {subCategoryList[i].text}
            </a>
          }
        />
      );
    }

    return (
      <div>
        <List>{list}</List>
      </div>
    );
  }
}
export default SubCategoryBox;
