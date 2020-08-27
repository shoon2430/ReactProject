import React, { Component } from "react";
import sub from "../../data/category/sub";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

class SubCategoryBox extends Component {
  render() {
    const { main } = this.props;
    let list = [];
    let subCategoryList = sub.filter((data) => data.main === main);

    for (var i = 0; i < subCategoryList.length; i++) {
      list = list.concat(
        <List.Item
          content={
            <Link
              to={`/list?category=${main}&subCategory=${subCategoryList[i].value}`}
            >
              {subCategoryList[i].text}
            </Link>
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
