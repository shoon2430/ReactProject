import React from "react";
import "./App.css";
import Header from "./header/Header";
import MainPage from "./mainPage/MainPage";
import ListPage from "./listPage/ListPage";
import DetailPage from "./detailPage/DetailPage";
import Footer from "./footer/Footer";
import allData from "./data/allData";

import { Container } from "semantic-ui-react";

function App() {
  console.log(allData);
  return (
    <Container className="Conatainer">
      <Header />
      <MainPage />
      {/* <ListPage /> */}
      {/* <DetailPage /> */}
      <Footer />
    </Container>
  );
}

export default App;
