import React, { Component } from "react";
import { Grid, Card, Image, Item } from "semantic-ui-react";
import RecommendItemView from "./RecommendItemView";

class RecommendListView extends Component {
  render() {
    const { selectItem } = this.props;
    
    return (
      <Grid >
        <Grid.Row>
          <div style={{fontWeight:"bold", fontSize:"20px"}}>
            <span style={{ color: "orange" }}>{selectItem.category}</span>
            <span>특가상품</span>
          </div>
        </Grid.Row>
        <Grid.Row>
            <RecommendItemView selectItem={selectItem}/>
            <RecommendItemView selectItem={selectItem}/>
            <RecommendItemView selectItem={selectItem}/>
            <RecommendItemView selectItem={selectItem}/>
            <RecommendItemView selectItem={selectItem}/>
        </Grid.Row>

        <Grid.Row>
          <div style={{fontWeight:"bold", fontSize:"20px"}}>
            <span style={{ color: "orange" }}>{selectItem.subCategory}</span>
            <span>특가상품</span>
          </div>
        </Grid.Row>

        <Grid.Row>
            <RecommendItemView selectItem={selectItem}/>
            <RecommendItemView selectItem={selectItem}/>
            <RecommendItemView selectItem={selectItem}/>
            <RecommendItemView selectItem={selectItem}/>
            <RecommendItemView selectItem={selectItem}/>
        </Grid.Row> 
      </Grid>
    );
  }
}

export default RecommendListView;
