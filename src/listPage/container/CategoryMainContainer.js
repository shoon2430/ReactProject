import React, { Component } from "react";
import CategoryBestItem from "../../mainPage/view/CategoryBestItem";
import { observer, inject } from "mobx-react";
import { Container } from "semantic-ui-react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "images/mainPage/page1.png",
  "images/mainPage/page2.png",
  "images/mainPage/page3.png",
  "images/mainPage/page4.png",
];

@inject("Store")
@observer
class CategoryMainContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="slide-container">
            <Slide>
              <div className="each-slide">
                <div
                  style={{
                    backgroundImage: `url(${slideImages[0]})`,
                    height: "100px",
                  }}
                >
                  <span>Slide 1</span>
                </div>
              </div>
              <div className="each-slide">
                <div
                  style={{
                    backgroundImage: `url(${slideImages[1]})`,
                    height: "100px",
                  }}
                >
                  <span>Slide 2</span>
                </div>
              </div>
              <div className="each-slide">
                <div
                  style={{
                    backgroundImage: `url(${slideImages[2]})`,
                    height: "100px",
                  }}
                >
                  <span>Slide 3</span>
                </div>
              </div>
            </Slide>
          </div>
        </Container>
      </div>
    );
  }
}

export default CategoryMainContainer;
