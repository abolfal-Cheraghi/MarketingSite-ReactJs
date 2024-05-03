import React, { useEffect, useState } from "react";
import "./ListTarifee.css";
import TabBox from "../tabBox/TabBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CartTariife from "../cartTariife/CartTariife";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "../loading/Loading";
import { Container } from "react-bootstrap";
export default function ListTarifee() {
  const [valueTab, setValueTab] = useState("webDesign");
  const [dataList, setDataList] = useState([]);
  const [isPending, setISPending] = useState(false);

  useEffect(() => {
    Aos.init();
  }, [valueTab]);

  useEffect(() => {
    axios.get("http://localhost:5000/listTariffeWeb").then((res) => {
      setDataList(res.data);
      setISPending(false);
    });
  }, []);

  // changer handler tabs and save value to state
  const changeTebHandler = (value) => {
    setValueTab(value);
  };

  return (
    <>
      <Container>
        <TabBox changeTab={changeTebHandler} />

        <div className="con-list">
          {isPending ? (
            <Loading />
          ) : (
            <Swiper
              breakpoints={{
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                600: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper swiper-plans"
            >
              {valueTab == "webDesign"
                ? dataList
                    .filter((item) => item.type == "webDesign")
                    .map((list) => (
                      <SwiperSlide
                        key={list.id}
                        data-aos="zoom-in-left"
                        data-aos-duration="700"
                      >
                        <CartTariife {...list} />
                      </SwiperSlide>
                    ))
                : dataList
                    .filter((item) => item.type == "seo")
                    .map((list) => (
                      <SwiperSlide
                        key={list.id}
                        data-aos="zoom-in-right"
                        data-aos-duration="700"
                      >
                        <CartTariife {...list} />
                      </SwiperSlide>
                    ))}
            </Swiper>
          )}
        </div>
      </Container>
    </>
  );
}
