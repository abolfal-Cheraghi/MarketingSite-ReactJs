import React, { useEffect } from "react";
import "./Contact.css";
import Header from "../../Components/header/Header";
import { Col, Container, Row } from "react-bootstrap";
import maskGroup from "../../assets/images/Mask-Group-13.png";
import FormContact from "../../Components/formContact/FormContact";
import Accordion from "react-bootstrap/Accordion";
import Aos from "aos";
export default function Contact() {
  const dataQuestions = [
    {
      key: "0",
      label: "حداکثر زمان تحویل پروژه",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      key: "1",
      label: "نحوه قیمت گذاری روی پروژه چطور است ؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      key: "2",
      label: "آیا تضمین کیفیت کار را میدهید ؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Container>
        {/* section hero contact */}
        <section className="sec-contact">
          <Row className="align-items-center gx-2">
            <Col
              className="col-12 col-xs-12 col-lg-6"
              data-aos="zoom-out-left"
              data-aos-duration="1000"
            >
              <div className="info-contact pe-5">
                <div className="top-title">تماس با ما</div>
                <h2 className="textBalck title-hero">
                  آیا سوال یا درخواستی از ما دارید ؟
                </h2>
                <p className="textGray size13">
                  از طریق فرم ارتباطی زیر میتوانید سوالات ، نظرات و درخواست های
                  خودتون رو با ما به اشتراک بگذارید و کارشناسان ما در اسرع وقت
                  به شما پاسخ خواهند داد 🙂
                </p>
              </div>
              <FormContact />
            </Col>
            <Col
              className="col-12 col-xs-12 col-lg-6"
              data-aos="zoom-out-right"
              data-aos-duration="1000"
            >
              <div className="img-contact">
                <div className="box-bg-contact">
                  <img src={maskGroup} alt="mask img" className="img-fluid" />
                  <div className="bg-img-contact "></div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/* section map and your questions */}
        <section className="sec-map my-5">
          <Row>
            <Col
              className="col-12 col-sm-12 col-xs-6 col-lg-6 my-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.3586555612583!2d51.48697142469562!3d35.815675122577694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e051287554db3%3A0x62c3fe76cd9bd8a6!2z2YXYrNiq2YXYuSDYqtis2KfYsduMINi52LHYtCDYotis2YjYr9in2YbbjNmH!5e0!3m2!1sfa!2s!4v1708590952812!5m2!1sfa!2s"
                frameborder="0"
                allowfullscreen="false"
                aria-hidden="false"
                tabindex="0"
                className="map"
              />
            </Col>
            <Col
              className="col-12 col-sm-12 col-xs-6 col-lg-6 my-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Accordion defaultActiveKey="0" flush>
                {dataQuestions.map((acc) => (
                  <Accordion.Item eventKey={acc.key}>
                    <Accordion.Header>{acc.label}</Accordion.Header>
                    <Accordion.Body>{acc.text}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
}
