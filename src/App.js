import React from "react";
import "./App.css";
import Header from "./header/Header";
import MainPage from "./mainPage/MainPage";
import ListPage from "./listPage/ListPage";
import DetailPage from "./detailPage/DetailPage";
import Footer from "./footer/Footer";

import { Container } from "semantic-ui-react";

function App() {
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
