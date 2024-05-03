import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderNewsProject.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CartProject from "../../cartProject/CartProject";
function SliderNewsProject() {
  const [dataNewProjects, setDataNewProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/projects/?_limit=5").then((response) => {
      setDataNewProjects(response.data);
    });
  }, []);

  axios;
  return (
    <div className="container-slider-pr">
      <div className="header-slider-pr">
        <div className="top-title px-3">نمونه کارها</div>
        <h2 className="title-section textWhite snas-bold">
          برخی از نمونه کار ها
        </h2>
      </div>
      <Swiper
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper slider-pr"
      >
        {dataNewProjects.map((item) => (
          <SwiperSlide key={item.id}>
            <CartProject {...item}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(SliderNewsProject);
