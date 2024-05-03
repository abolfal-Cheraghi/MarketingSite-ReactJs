import React, { useEffect, useState } from "react";
import "./Service.css";
import BoxLocation from "../../Components/boxLocation/BoxLocation";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineDateRange, MdEmail } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import {
  FaTelegram,
  FaWhatsapp,
  FaFacebook,
  FaRegComment,
  FaTwitter,
  FaPhone,
} from "react-icons/fa6";
import { RiUserSettingsLine } from "react-icons/ri";
import JoinNewsletter from "../../Components/joinNewsletter/JoinNewsletter";
import Btn1 from "../../Components/btn1/Btn1";
import { Spin } from "antd";
export default function Service() {
  const [dataService, setDataService] = useState({});
  const [isPending, setIsPending] = useState(true);
  let idService = useParams().serviceId;

  useEffect(() => {
    axios.get(`http://localhost:5000/services/${idService}`).then((res) => {
      setDataService(res.data);
      setIsPending(false);
    });
  }, [idService]);
  return (
    <>
      {isPending ? (
        <div className="con-spin">
          <Spin size="large" />
        </div>
      ) : (
        <Container>
          {/* location */}
          <BoxLocation
            cateLoc="خدمات"
            linkCateLoc="/services"
            locOrg={`${dataService.titleSr}`}
            linkLocOrg={`/service/${dataService.id}`}
          />

          {/* section content service */}
          <section className="section-service">
            <Row>
              <Col className="col-12 col-xs-12 col-lg-8">
                <div className="info-content border-1 mt-3">
                  <div className="header">
                    <img
                      src={dataService.imgSr}
                      alt="img service"
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
                  <hr className="hr-sr-page" />
                  <div className="mt-3">
                    <h1 className="textColor1">{dataService.titleSr}</h1>
                    <p className="textGray desc-any">{dataService.descSr}</p>
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-xs-12 col-lg-4 mt-3">
                <div className="border-1 container-info">
                  <div className="title-box">مشاوره و درخواست همکاری</div>
                  <p className="textGray size13 text-justify">
                    برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم
                    متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است.
                  </p>
                  <div className="wrapper-list-info">
                    <div className="list-item-info">
                      <span className="text-info-list">
                        <FaPhone size="16px" /> تلفن تماس :
                      </span>
                      <span className="awnser-info">1234567 - 035</span>
                    </div>
                    <div className="list-item-info">
                      <span className="text-info-list">
                        <MdEmail size="17px" />
                        ایمیل :
                      </span>
                      <span className="awnser-info">Info@yoursite.com</span>
                    </div>
                    <div className="list-item-info">
                      <span className="text-info-list">
                        <IoShareSocialSharp size="17px" /> شبکه های اجتماعی :
                      </span>
                      <div className="wrapper-icon-social-sr">
                        <FaFacebook size="14px" />
                        <FaTelegram size="14px" />
                        <FaWhatsapp size="14px" />
                      </div>
                    </div>
                  </div>
                  <div className="box-btn-livePrew mt-2">
                    <Btn1 text="درخواست مشاوره و همکاری" link="/contact"></Btn1>
                  </div>
                </div>
                <div className="border-1 container-info mt-3">
                  <div className="title-box">عضویت در خبرنامه </div>
                  <div className="my-3">
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
