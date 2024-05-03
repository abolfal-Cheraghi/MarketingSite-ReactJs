import React, { useEffect } from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import imgHero from "../../assets/images/workspace2.png";
import imgContact from "../../assets/images/Group-28-1024x897.png";
import imgSupport from "../../assets/images/Group-969.png";
import imgNemodar from "../../assets/images/Group-21.png";
import textCover from "../../assets/images/Ellipse-23.png";
import Btn2 from "../../Components/Btn2/Btn2";
import InfoVideo from "../../Components/infoVideo/InfoVideo";
import SlidersCompany from "../../Components/SlidersCompany/SlidersCompany";
import BoxServisec from "../../Components/boxServisec/BoxServisec";

import imgSer1 from "../../assets/images/13.-Target.png";
import imgSer2 from "../../assets/images/28.-Upload.png";
import imgSer3 from "../../assets/images/30.-Palette.png";
import imgSer4 from "../../assets/images/55.-Briefcase.png";
import SliderNewsProject from "../../Components/SliderNewsProject/SliderNewsProject.jsx/SliderNewsProject";
import BoxList from "../../Components/boxList/BoxList";
import ListTarifee from "../../Components/ListTarifee/ListTarifee";
import Footer from "../../Components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import SlideNewsArticle from "../../Components/SlideNewsArticle/SlideNewsArticle";
export default function Home() {
  const anyServicesData = [
    { id: 1, imgService: imgSer1, titleService: "تبلیغات هدفمند" },
    { id: 2, imgService: imgSer2, titleService: "افزایش رتبه سایت" },
    { id: 3, imgService: imgSer3, titleService: "طراحی سایت شما" },
    { id: 4, imgService: imgSer4, titleService: "بهینه سازی سرعت" },
  ];
  const dataMazaya = [
    {
      id: 1,
      counter: "01",
      title: "صرفه جویی در وفت",
    },
    {
      id: 2,
      counter: "02",
      title: "کیفیت بالای خروجی",
    },
    {
      id: 3,
      counter: "03",
      title: "آموزش مدیریت سایت",
    },
    {
      id: 4,
      counter: "04",
      title: "پشتیبانی چند ماهه",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Container>
        {/* Section Hero */}
        <section className="section-hero">
          <Row className="align-items-center">
            <Col
              className="col-12 col-xs-12 col-lg-6"
              data-aos="zoom-out-left"
              data-aos-duration="1000"
            >
              <div className="info-hero">
                <h2 className=" px-2  title-hero">
                  ما
                  <span className="text-img-hero">
                    رویاهای
                    <img src={textCover} alt="" className="" />
                  </span>
                  شما عزیزان <br /> را خلق و به
                  <b className="textColor1"> واقعـیت </b> تبدیل میکنیم
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
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارهای مناسب میباشد.
                </p>
                <div className="footer-info-hero d-flex align-items-center gap-3">
                  <Btn2 text="بیشتر بدانید" link="/about" />
                  <InfoVideo />
                </div>
              </div>
            </Col>
            <Col
              className="col-12  col-xs-12 col-lg-6"
              data-aos="zoom-out-right"
              data-aos-duration="1000"
            >
              <div className="img-hero">
                <img src={imgHero} alt="image-hero" className="img-fluid" />
                <div className="box-img-hero">
                  <span className="textColor1 text-box">بازدید از شما</span>
                  <img
                    src={imgNemodar}
                    alt="img nemodar"
                    className="img-fluid"
                  />
                  <span className="textColor1 text-box">
                    به مرز انفجار خواهد رسید
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/*Section Companies */}
        <section className="section-slider-companies my-2">
          <div data-aos="fade-in" data-aos-duration="1400">
            <SlidersCompany />
          </div>
        </section>

        {/* Section any Services*/}
        <section className="section-any-services">
          <Row className="align-items-center">
            <Col
              className="col-12 col-xs-12 col-lg-6"
              data-aos="fade-in"
              data-aos-duration="1400"
            >
              <div className="info-any-services">
                <div className="top-title">خدمات ما</div>
                <h2 className="title-any">
                  برخی از خدماتی که ما به شما ارائه میدهیم
                </h2>
                <p className="textGray desc-any">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                </p>
                <Btn2 link="/services" text="مشاهده همه خدمات" />
              </div>
            </Col>
            <Col
              className="col-12 col-xs-12 col-lg-6"
              data-aos="fade-in"
              data-aos-duration="1400"
            >
              <div className="wrraper-box-services">
                <Row className="gx-3">
                  {anyServicesData.map((itemSer) => (
                    <Col
                      className={`col-6`}
                      id={`box-service${itemSer.id}`}
                      key={itemSer.id}
                    >
                      <BoxServisec {...itemSer} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </section>

        {/* Section Newest Project */}
        <section className="newest-project">
          <div data-aos="fade-in" data-aos-duration="1400">
            <SliderNewsProject />
          </div>
        </section>

        {/* section contact us */}

        <section className="contact-us-home ">
          <Row
            className="align-items-center"
            data-aos="fade-in"
            data-aos-duration="1400"
          >
            <Col className="col-12 col-xs-12 col-lg-6">
              <div className="info-contact-us">
                <h2 className="title-any">
                  آیا شماهم به فکر داشتن یک وبسایت هستین ؟
                </h2>
                <p className="textGray desc-any">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                </p>

                <Row className="mb-3 gx-3">
                  {dataMazaya.map((itemM) => (
                    <Col
                      className="col-6 "
                      key={itemM.id}
                      id={`item-list-${itemM.id}`}
                    >
                      <BoxList {...itemM} />
                    </Col>
                  ))}
                </Row>
                <Btn2 text="دریافت مشاوره و ثبت سفارش" link="/contact" />
              </div>
            </Col>
            <Col
              className="col-12 col-xs-12 col-lg-6"
              data-aos="fade-in"
              data-aos-duration="1400"
            >
              <div className="img-contact">
                <div className="box-bg-contact">
                  <img
                    src={imgContact}
                    alt="image-hero"
                    className="img-fluid"
                  />
                  <div className="bg-img-contact"></div>
                </div>
                <div className="box-img-contact">
                  <span className="textColor1 text-box fs-6">
                    بازدید از شما
                  </span>
                  <img
                    src={imgSupport}
                    alt="img suupurt"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      {/* section tarefe */}
      <section className="my-5 section-triife" id="tariife">
        <div
          className="top-s-tariife"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <div className="top-title">تعرفه ها</div>
          <h2 className="title-any snas-bold">تعرفه خدمات ما</h2>
        </div>
        <div className="list-tariffe">
          <ListTarifee />
        </div>
      </section>

      {/* section new articles */}
      <section className="my-5 container">
        <div
          className="d-flex flex-column align-items-center gap-2 "
          data-aos="fade-in"
          data-aos-duration="800"
        >
          <div className="top-title">مقالات</div>
          <h2 className="title-any">آخرین مقالات</h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <SlideNewsArticle />
        </div>
      </section>
    </>
  );
}
