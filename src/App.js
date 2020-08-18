import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Header from "./header/Header";
import MainPage from "./mainPage/MainPage";
import ListPage from "./listPage/view/ListPage";
import DetailPage from "./detailPage/DetailPage";
import Footer from "./footer/Footer";
import { Container } from "semantic-ui-react";
import { observer, inject } from "mobx-react";

const monpangBanner = {
  width: "100%",
  height: "28px",
  borderTop: "solid  #c7c7c7 1px",
  background: "#efefef",
};

const monpangAdvertising = {
  height: "40px",
};

@inject("Store")
@observer
class App extends Component {
  render() {
    const { page } = this.props.Store;

    // let pageComponent = <MainPage />;
    // if (page.getPage === "LIST") pageComponent = <ListPage />;
    // if (page.getPage === "DETAIL") pageComponent = <DetailPage />;

    return (
      <>
        <div className="monpangAdvertising" style={monpangAdvertising}>
          {/* 쿠팡 홈페이지의 제일 상단에 보이는 광고 부분의 크기를 임시로 잡아두었습니다. */}
          X
        </div>
        <div className="monpangBanner" style={monpangBanner}>
          {/* 쿠팡 홈페이지의 상단 2번째에 보이는 즐겨찾기, 로그인, 회원가입, 고객센터 부분의 크기를 임시로 잡아두었습니다. */}
        </div>
        <Container>
          <Header />
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/list" component={ListPage} exact={true} />
          <Route path="/detail" component={DetailPage} exact={true} />
          <Footer />
        </Container>
      </>
    );
  }
}

export default App;
