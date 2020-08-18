import React, { Component } from 'react';
import main from "../../data/category/main";


class MainCategoryBox extends Component {
    render() {
        let MainSubCategoryBox = sub.filter((data)=>data.main ===main)

          <Dropdown.Item>
            하하
            <Dropdown pointing="left" className="link item" options={main} />
          </Dropdown.Item>
        return (
            {MainSubCategoryBox}
        );
    }
}

export default MainCategoryBox;