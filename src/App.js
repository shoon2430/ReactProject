import React, { Component } from "react";
import "./App.css";
import Header from "./header/Header";
import MainPage from "./mainPage/MainPage";
import ListPage from "./listPage/ListPage";
import DetailPage from "./detailPage/DetailPage";
import Footer from "./footer/Footer";
// import allData from "./data/allData";
import { Container } from "semantic-ui-react";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class App extends Component {
  render() {
    const { page } = this.props.Store;

    let pageComponent = <MainPage />;
    if (page.getPage === "LIST") pageComponent = <ListPage />;
    if (page.getPage === "DETAIL") pageComponent = <DetailPage />;

    return (
      <div>
        <div className="monpang__banner"></div>
        <Container className="Conatainer">
          <Header />
          {pageComponent}
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
