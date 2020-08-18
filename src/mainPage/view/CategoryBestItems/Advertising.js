import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

const advertisingList = [
  "foodAdvertising",
  "elecAdvertising",
  "clotheAdvertising",
];

class Advertising extends Component {
  render() {
    const { category } = this.props;
    return (
      <Grid>
        <Grid.Column
          style={{
            width: "100%",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <Image
            src={`./images/mainPage/${advertisingList[category]}.png`}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Advertising;
