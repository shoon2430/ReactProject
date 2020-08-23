import React, { Component } from "react";
import QnASidebar from "../view/QnASidebar";
import QnAInfo from "../view/QnAInfo";
import { Grid, Segment } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

@withRouter
class QnAContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={3} style={{ height: "700px" , marginTop:"20px"}}>
              <p>
                <span>
                  <QnASidebar />
                </span>
              </p>
            </Grid.Column>
            <Grid.Column
              stretched
              width={13}
              style={{ height: "700px", marginTop: "20px" }}
            >
              <Segment>
                <QnAInfo />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default QnAContainer;
