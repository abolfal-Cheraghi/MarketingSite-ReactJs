import React, { useEffect } from "react";
import "./About.css";
import Header from "../../Components/header/Header";
import { Col, Container, Row } from "react-bootstrap";
import imgIntro from "../../assets/images/newworkhome.png";
import Btn2 from "../../Components/Btn2/Btn2";
import InfoVideo from "../../Components/infoVideo/InfoVideo";
import BoxInfo from "../../Components/BoxInfo/BoxInfo";
import CartMember from "../../Components/cartMember/CartMember";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useFetch } from "../../hooks/useFetch";
import { Spin } from "antd";
import CartComment from "../../Components/CartComment/CartComment";
import Aos from "aos";
export default function About() {
  const [data, isPending] = useFetch("http://localhost:5000/user-us");
  const [dataComment, isPendingComment] = useFetch(
    "http://localhost:5000/comments"
  );

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Container>
        <section className="section-intro-about my-5">
          <Row className="align-items-center">
            <Col
              className="col-12 col-sm-12 col-xs-6 col-lg-6 my-3"
              data-aos="zoom-out-left"
              data-aos-duration="1000"
            >
              <div className="info-about">
                <h2 className="textBlack snas-bold">
                  یک تجربه استثنایی <br />و
                  <span className="textColor1 snas-bold">منحصر به فرد</span>
                  برای شما عزیزان
                </h2>
                <p className="textGray desc-hero">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود است.
                </p>
                <div className="d-flex gap-4">
                  <Btn2 text="مشاهده خدمات" link="/services" />
                  <InfoVideo />
                </div>
              </div>
            </Col>
            <Col
              className="col-12 col-sm-12 col-xs-6 col-lg-6 my-3"
              data-aos="zoom-out-right"
              data-aos-duration="1000"
            >
              <div className="img-contact">
                <div className="box-bg-contact">
                  <img src={imgIntro} alt="img-about" className="img-fluid" />
                  <div className="bg-img-contact"></div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="my-4">
          <Row className="align-items-center column-reverce-mobile">
            <Col
              className="col-12 col-xs-12 col-lg-6"
              data-aos="zoom-out-left"
              data-aos-duration="1000"
            >
              <Swiper
                spaceBetween={20}
                breakpoints={{
                  600: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                }}
                loop={true}
                className="mySwiper"
              >
                {isPending ? (
                  <Spin size="large" style={{ margin: "0 150px" }} />
                ) : (
                  data.map((user) => (
                    <SwiperSlide key={user.id}>
                      <CartMember {...user} />
                    </SwiperSlide>
                  ))
                )}
              </Swiper>
            </Col>
            <Col
              className="col-12 col-xs-12 col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <BoxInfo />
            </Col>
          </Row>
        </section>

        {/* section comments */}
        <section className="comments-slider">
          <div
            className="d-flex align-items-center flex-column gap-3"
            data-aos="fade-in"
            data-aos-duration="700"
          >
            <div className="top-title">نظرات شما</div>
            <h2 className="textBlack title-any">نظرات مشتریان ما</h2>
          </div>
        </section>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper my-4"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {isPendingComment ? (
            <Spin size="large" style={{ margin: "0 150px" }} />
          ) : (
            dataComment.map((comment) => (
              <SwiperSlide key={comment.id}>
                <CartComment {...comment} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </Container>
    </>
  );
}
