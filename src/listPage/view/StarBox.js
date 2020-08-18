import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class StarBox extends Component {
  render() {
    const { starCount, starFilterCategory } = this.props;
    let stars = [];
    for (var i = 0; i < 5; i++) {
      stars =
        starCount > i
          ? stars.concat(<Icon name="star" color="yellow" />)
          : stars.concat(<Icon name="star" color="grey" />);
    }

    return (
      <div onClick={() => starFilterCategory("rating", starCount)}>
        {stars}
        <sapn>{starCount}점</sapn>
      </div>
    );
  }
}

export default StarBox;
