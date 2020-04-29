import React, { useState } from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Menu from "./components/menuTab/Menu";
import Carousel from "./components/carousel/Carousel";

import "./styles/reset.css";

import useFetch from "./components/util/useFetch.jsx";

const App = () => {
  const [carouselMain, setCarouselMain] = useState({ data: { banchans: [] } });
  const [carouselSide, setCarouselSide] = useState({ data: { banchans: [] } });
  const [carouselSoup, setCarouselSoup] = useState({ data: { banchans: [] } });

  useFetch(setCarouselMain, "http://54.180.50.220:8080/banchans?category=main");
  useFetch(setCarouselSide, "http://54.180.50.220:8080/banchans?category=side");
  useFetch(setCarouselSoup, "http://54.180.50.220:8080/banchans?category=soup");

  return (
    <>
      <Nav />
      <Header />
      <Menu />
      <Carousel
        key={carouselMain.data.category_id}
        CarouselTitle="메인반찬"
        subTitle="담기만 하면 완성되는 메인반찬"
        lists={carouselMain.data.banchans}
      />
      <Carousel
        key={carouselSide.data.category_id}
        CarouselTitle="밑반찬"
        subTitle="언제 먹어도 든든한"
        lists={carouselSide.data.banchans}
      />
      <Carousel
        key={carouselSoup.data.category_id}
        CarouselTitle="국·찌개"
        subTitle="김이 모락모락 국,찌개"
        lists={carouselSoup.data.banchans}
      />
    </>
  );
};

export default App;
