import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

class BestDiscountItem extends Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Grid>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default BestDiscountItem;
