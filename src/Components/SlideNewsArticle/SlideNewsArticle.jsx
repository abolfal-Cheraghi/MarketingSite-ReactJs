import React, { memo, useEffect, useState } from "react";
import "./SlideNewsArticle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

import axios from "axios";
import CartArticle2 from "../cartArticle2/CartArticle2";
function SlideNewsArticle() {
  const [dataNewArticle, setNewArticle] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/articles/?_limit=6").then((res) => {
      setNewArticle(res.data);
    });
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {dataNewArticle.map((article) => (
          <SwiperSlide key={article.id}>
            <CartArticle2
              {...article}
              height="230"
              showBtn={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default memo(SlideNewsArticle);
