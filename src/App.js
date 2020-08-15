import React from "react";
import "./App.css";
import Header from "./header/Header";
import MainPage from "./mainPage/MainPage";
import ListPage from "./listPage/view/ListPage";
import DetailPage from "./detailPage/DetailPage";
import Footer from "./footer/Footer";
// import allData from "./data/allData";

import { Container } from "semantic-ui-react";

function App() {
  return (
    <div>
      <div className="monpang__banner"></div>
      <Container className="Conatainer">
        <Header />
        <MainPage />
        {/* <ListPage /> */}
        {/* <DetailPage /> */}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
