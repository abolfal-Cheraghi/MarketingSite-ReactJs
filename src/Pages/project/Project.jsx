import React, { useEffect, useState } from "react";
import "./Project.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { Spin, Tag, Image } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import { RiUserSettingsLine } from "react-icons/ri";
import { LuUserCog } from "react-icons/lu";
import { GoCalendar } from "react-icons/go";
import { VscTag } from "react-icons/vsc";
import { BsClockHistory } from "react-icons/bs";
import Btn1 from "../../Components/btn1/Btn1";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import JoinNewsletter from "../../Components/joinNewsletter/JoinNewsletter";
import BoxLocation from "../../Components/boxLocation/BoxLocation";

export default function Project() {
  const [dataProject, setDataProject] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [Technologies, setTechnologies] = useState([]);
  const [imagesPr, setImagePr] = useState([]);
  let idParams = useParams().projectId;

  useEffect(() => {
    axios.get(`http://localhost:5000/projects/${idParams}`).then((response) => {
      setDataProject(response.data);
      setTechnologies(response.data.TechnologiesUsed);
      setImagePr(response.data.GalleryPr);
      setIsPending(false);
    });
  }, [idParams]);

  return (
    <>
      {isPending ? (
        <div className="con-loader-page">
          <Spin size="large" />
        </div>
      ) : (
        <Container>
          {/* location */}
          <BoxLocation
            cateLoc="پروژه ها"
            linkCateLoc="/project"
            locOrg={`${dataProject.titlePr}`}
            linkLocOrg={`/project/${dataProject.id}`}
          />
          {/* section org */}
          <section>
            <Row className="my-3">
              <Col className="col-12 col-xs-12 col-lg-8 mt-3">
                <div className="info-content border-1">
                  <div className="header">
                    <img
                      src={dataProject.imgPr}
                      alt="img project"
                      className="img-page"
                    />
                  </div>
                  <div className="box-intoro">
                    <div className="right">
                      <span className="size12">
                        <MdOutlineDateRange size="14px" className="me-1" />
                        25 سپتامبر, 2023
                      </span>
                      <span className="size12">
                        <FaRegComment size="14px" className="me-1" /> بدون
                        دیدگاه
                      </span>
                    </div>
                    <div className="wrrapper-icon-share d-flex gap-2">
                      <FaFacebook size="13px" />
                      <FaTwitter size="13px" />
                      <FaTelegram size="13px" />
                      <FaWhatsapp size="13px" />
                    </div>
                  </div>
                  <div className="Separator">
                    <span className="text-Separator">گالری تصاویر پروژه</span>
                  </div>
                  <div className="slider-image-pr">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={10}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 4,
                        },
                        768: {
                          slidesPerView: 4,
                        },
                        1024: {
                          slidesPerView: 4,
                        },
                        1200: {
                          slidesPerView: 5,
                        },
                      }}
                      // loop={true}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      <Image.PreviewGroup
                        preview={{
                          onChange: (current, prev) =>
                            console.log(
                              `current index: ${current}, prev index: ${prev}`
                            ),
                        }}
                      >
                        {imagesPr.map((img) => (
                          <SwiperSlide>
                            <Image src={img} placeholder="نمایش" />
                          </SwiperSlide>
                        ))}
                      </Image.PreviewGroup>
                    </Swiper>
                  </div>
                  <div className="contant-pr mt-4">
                    <h1 className="textColor1">{dataProject.titlePr}</h1>
                    <p className="desc-any textGray desc">
                      {dataProject.descPr}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-xs-12 col-lg-4 mt-3">
                <div className="container-info border-1">
                  <div className="title-box">اطلاعات پروژه :</div>
                  <div className="wrapper-list-info">
                    <div className="list-item-info">
                      <span className="text-info-list">
                        <RiUserSettingsLine size="17px" /> کارفرمای محترم :
                      </span>
                      <span className="awnser-info">
                        {dataProject.Employer}
                      </span>
                    </div>
                    <div className="list-item-info">
                      <span className="text-info-list">
                        <GoCalendar size="17px" /> تاریخ شروع:
                      </span>
                      <span className="awnser-info">
                        {dataProject.StartDate}
                      </span>
                    </div>
                    <div className="list-item-info">
                      <span className="text-info-list">
                        <VscTag size="17px" />
                        قیمت پروژه:
                      </span>
                      <span className="awnser-info">
                        {dataProject.ProjectPrice}
                        تومان
                      </span>
                    </div>
                    <div className="list-item-info">
                      <span className="text-info-list">
                        <BsClockHistory size="17px" /> مدت زمان انجام:
                      </span>
                      <span className="awnser-info">
                        {dataProject.Duration} روز
                      </span>
                    </div>
                  </div>

                  <div className="box-btn-livePrew">
                    <Btn1
                      text="مشاهده آنلاین پروژه"
                      link="#"
                      width="100%"
                      className="btn-LivePrev"
                    >
                      <MdKeyboardDoubleArrowLeft className="ms-3" />
                    </Btn1>
                  </div>
                </div>
                <div className="container-info border-1 mt-3">
                  <div className="title-box">تکنولوژی های استفاده شده :</div>
                  <div className="box-Technologies">
                    {Technologies.map((item) => (
                      <Tag>{item}</Tag>
                    ))}
                  </div>
                </div>
                <div className="container-info border-1 mt-3">
                  <div className="title-box">عضویت در خبرنامه</div>
                  <div className="mt-2">
                    <JoinNewsletter />
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      )}
    </>
  );
}
