import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import "./BestDiscountItem.css";

const angle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

class BestDiscountImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }

  componentWillReceiveProps() {
    this.setState({
      animate: true,
    });

    setTimeout(() => {
      this.setState({
        animate: false,
      });
    }, 500);
    return;
  }

  render() {
    const { Background, changeBackground, left, right } = this.props;
    const { animate } = this.state;
    const animation = animate ? "fadeIn" : "fadeOut";
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "200px",
        }}
        className={`animated ${animation}`}
      >
        <div style={{ height: "45%" }}></div>
        <div style={angle}>
          <Icon
            name="chevron left"
            size="big"
            onClick={() => changeBackground(left)}
          />
          <Icon
            name="chevron right"
            size="big"
            onClick={() => changeBackground(right)}
          />
        </div>
      </div>
    );
  }
}

export default BestDiscountImage;
