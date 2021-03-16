# React& Mobx Project

### MONPANG 페이지 바로가기 아래 로고 클릭 ! ! ! ! ​:arrow_down:​​:arrow_down:​

[!["Logo"](/public/images/readmeImages/logo.png)](https://shoon2430.github.io/ReactProject/)

> 리액트와 Mobx를 공부한 내용을 바탕으로
>
> 실제 운영되고 있는 커머스 사이트를 구현해보자!
>
> TI **MON** + CU **PANG** === **MONPANG**

## 🙋 Project Member

##### 총 3명의 팀원으로 구성되어 있습니다.

**개발기간 : 2020. 08. 14 ~ 2020. 08. 23 (약10일) **

- 역할

  - 👦 정승훈 [**shoon2430**](https://github.com/shoon2430) : 메인 페이지, 로그인/회원가입, 장바구니 기능 구현
  - 👧 문소민 [**dalsomin**](https://github.com/dalsomin) : 리스트 페이지, 헤더의 카테고리 기능 구현
  - 👩 이은송 [**eunsongsong**](https://github.com/eunsongsong) : 디테일 페이지, 검색 기능 구현

## 🔨개발 환경

##

## 📁 폴더 구조

> 3명의 팀원이서 각각 MainPage ListPage DetailPage를 나누어서 구현
>
> !["project"](/public/images/readmeImages/projectContructor.png)

## 💻주요 기능

### 1. Header

- 카테고리 검색 및 최근 조회 상품 등록
  - 메인카테고리와 서브카테고리를 선택가능.
  - 상품의 세부정보 조회시 최근 조회상품에 추가
    !["MainPage"](/public/images/readmeImages/main_category.png)
- 회원관리 탭, 장바구니, 마이몬팡(구매목록조회)
  - 로그인중인 경우
    !["login"](/public/images/readmeImages/loginShow.png)
  - 비로그인인 경우
    !["logout"](/public/images/readmeImages/noLoginShow.png)
  - 장바구니에 추가한 목록 조회 및 주문
    !["logout"](/public/images/readmeImages/basket.png)
  - 주문한 상품 리스트 조회
    !["logout"](/public/images/readmeImages/shoppingList.png)

### 2. Main Page

- 베스트 상품 조회

  - 전체 품목 중 평점과 할인률 판매량이 높은 순으로 8개 조회

    !["MainPage"](/public/images/readmeImages/main.png)

- 카테고리별 추천 상품 조회

  - 카테고리별 평점과 할인률이 높은 순으로 18개 까지 조회

  - 카테고리는 식품, 가전, 의류 총 3가지

    !["MainPage"](/public/images/readmeImages/main_category_good.png)
    !["MainPage"](/public/images/readmeImages/main_category_good2.png)

### 3. List Page

- 카테고리별 상품 리스트 조회

  - 메인카테고리, 서브카테고리, 배송방법, 상품상태, 품절여부, 평점을 기준으로 필터링 가능
    !["ListPage"](/public/images/readmeImages/list.png)

  - 메인 카테고리로 조회시 해당 메인카테고리의 베스트 상품 3개 조회
    !["ListPage"](/public/images/readmeImages/list_best.png)

### 4. Detail Page

- 상품 상세정보
  - 상품의 상세정보 조회 및 장바구니 추가 기능
    !["DetailPage"](/public/images/readmeImages/detail1.png)
- 동일 카테고리별 상품 조회
  - 동일 카테고리의 특가 상품 및 연관상품 조회
  - !["DetailPage"](/public/images/readmeImages/detail2.png)
