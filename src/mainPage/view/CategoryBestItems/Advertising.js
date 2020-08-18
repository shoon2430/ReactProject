import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
class Advertising extends Component {
  render() {
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
            src="./images/mainPage/elecAdvertising.png"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Advertising;
