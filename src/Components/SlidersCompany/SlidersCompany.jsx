import React from "react";
import "./SlidersCompany.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import company1 from "../../assets/images/client-1.png";
import company2 from "../../assets/images/clienty-2.png";
import company3 from "../../assets/images/clienty-3.png";
import company4 from "../../assets/images/clienty-4.png";
import company5 from "../../assets/images/client-5.png";
import company6 from "../../assets/images/client-1.png";

export default function SlidersCompany() {
  const companiesImg = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
  ];

  return (
    <>
      <div className="slider-companies">
        <h3 className="textColor1 my-1 snas-medium text-center fs-6">
          َشرکت هایی که به ما اعتماد کردند !
        </h3>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {companiesImg.map((item) => (
            <SwiperSlide>
              <img src={item} alt="company-img" className="company-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
