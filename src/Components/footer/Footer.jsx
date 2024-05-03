import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import logoFooter from "../../assets/images/logoFooter.svg";
import {
  FaPhoneFlip,
  FaLocationDot,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Footer() {
  const [linkServices, setLinkServices] = useState([]);
  const [linkUsefull, setLinkUsefull] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/linkServiceFooter").then((res) => {
      setLinkServices(res.data);
    });
    axios.get("http://localhost:5000/linkUsefullWeb").then((res) => {
      setLinkUsefull(res.data);
    });
  }, []);
  return (
    <footer>
      <Container>
        <Row className="gx-5">
          <Col className="col-12 col-xs-5 col-lg-5 my-3">
            <div className="con-right-footer">
              <img src={logoFooter} alt="logo" className=" logo-footer" />
              <p className="desc-footer textWhite size12">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>

              <div className="form-join">
                <p className="titles-footer">عضویت خبرنامه</p>
                <hr className="hr-title" />

                <form>
                  <div className="input-join-footer">
                    <input type="text" placeholder="ایمیل شما:" />
                    <button type="button">عضویت</button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-xs-7 col-lg-7 my-3">
            <Row className="gx-5">
              <Col className="col-6 col-xs-6 col-lg-3">
                <p className="titles-footer">خدمات ما</p>
                <hr className="hr-title" />
                <ul className="list-footer">
                  {linkServices.map((item) => (
                    <li>
                      <Link to={item.link} className="nav-link">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col className="col-6 col-xs-6 col-lg-3">
                <p className="titles-footer">لینک های مفید</p>
                <hr className="hr-title" />
                <ul className="list-footer">
                  {linkUsefull.map((itemLink) => (
                    <li>
                      <Link to={itemLink.link} className="nav-link">
                        {itemLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col className="col-12 col-xs-12 col-lg-6">
                <p className="titles-footer">راه های ارتباطی</p>
                <div className="con-left-footer">
                  <hr className="hr-title" />
                  <div className="img-License d-flex gap-3">
                    <img
                      src="https://halochin.ir/Technology/wp-content/uploads/2023/09/Group-30.png"
                      alt="img-License1"
                    />
                    <img
                      src="https://halochin.ir/Technology/wp-content/uploads/2023/09/Group-30.png"
                      alt="img-License2"
                    />
                  </div>
                  <div className="address-footer">
                    <p className="desc-contact">
                      <FaLocationDot size="17px" />
                      آدرس: تهران ، خیابان خوبان ، کوچه طراحان سایت ، پ 22
                    </p>
                    <p className="desc-contact">
                      <FaPhoneFlip size="15px" />
                      تلفن تماس: 1234567 - 035
                    </p>
                  </div>

                  <div className="wrapper-btn-social-media">
                    <button>
                      <FaFacebook />
                    </button>
                    <button>
                      <FaTwitter />
                    </button>
                    <button>
                      <FaTelegram />
                    </button>
                    <button>
                      <FaWhatsapp />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <p className="textWhite size13 text-center py-2">
          تمامی حقوق برای سایت آماده تکنولوژی محفوظ میباشد.
        </p>
      </Container>
    </footer>
  );
}
