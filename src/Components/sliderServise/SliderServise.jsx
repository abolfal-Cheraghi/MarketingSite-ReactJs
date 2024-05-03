import React, { memo, useEffect, useState } from "react";
import "./SliderServise.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import CartService from "../cartService/CartService";
import { Spin } from "antd";
function SliderServise() {
  const [dataSr, setDataSr] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/services/?_limit=5").then((res) => {
      setDataSr(res.data);
      setIsPending(false);
    });
  }, []);
  return (
    <>
      {isPending ? (
        <div className="con-spin">
          <Spin size="small" />
        </div>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper sliderService"
        >
          {dataSr.map((item) => (
            <SwiperSlide key={item.id}>
              <CartService {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default memo(SliderServise);
