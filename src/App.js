import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Label } from "semantic-ui-react";

import Header from "./header/Header";
import MainPage from "./mainPage/MainPage";
import ListPage from "./listPage/view/ListPage";
import DetailPage from "./detailPage/DetailPage";
import Footer from "./footer/Footer";
import MyMonpang from "./user/container/MyMonpangContainer";
import BasketList from "./user/container/BasketListContainer";
import NewItems from "./header/NewItems";
import QnA from "./qnaPage/container/QnAContainer";

import { Container } from "semantic-ui-react";
import { observer, inject } from "mobx-react";

const monpangBanner = {
  width: "100%",
  height: "32px",
  borderTop: "solid  #c7c7c7 1px",
  background: "#efefef",
};

const loginContainerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  margin: "1px",
};

@inject("Store")
@observer
class App extends Component {
  render() {
    const { user } = this.props.Store;

    const nomalState = (
      <div>
        <Label as="a" href="/login">
          로그인
        </Label>
        <Label as="a" href="/signup">
          회원가입
        </Label>
      </div>
    );

    const loginState = (
      <div>
        <Label>{user.getLoginUser}(님)</Label>
        <Label onClick={() => user.logOut()}>로그아웃</Label>
      </div>
    );

    return (
      <>
        <Container className="monpangBanner" style={monpangBanner}>
          <Container style={loginContainerStyle}>
            {user.getLoginUser !== "null" ? loginState : nomalState}
            {/* 쿠팡 홈페이지의 상단 2번째에 보이는 즐겨찾기, 로그인, 회원가입, 고객센터 부분의 크기를 임시로 잡아두었습니다. */}
            <Label as="a" href="/qna">
              <QnA />
            </Label>
          </Container>
        </Container>

        <NewItems />

        <Container>
          <Header />
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/list" component={ListPage} exact={true} />
          <Route path="/detail" component={DetailPage} exact={true} />
          <Route path="/myMonpang" component={MyMonpang} exact={true} />
          <Route path="/basket" component={BasketList} exact={true} />
          <Route path="/qna" component={QnA} exact={true} />
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
