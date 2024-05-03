import React, { useEffect, useState } from "react";
import "./Services.css";

import { Col, Container, Row } from "react-bootstrap";
import CartService from "../../Components/cartService/CartService";
import axios from "axios";
import { Spin } from "antd";
import Footer from "../../Components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Services() {
  const [dataServices, setDataServices] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => {
      setDataServices(res.data);
      setIsPending(false);
    });
    Aos.init();
  }, []);
  return (
    <>
      <section className="section-services container">
        <div className="title-box-sr">
          <div className="top-title">خدمات ما</div>
          <h2 className="textBlack">
            برخی از خدماتی که ما به شما ارائه میدهیم
          </h2>
        </div>

        <Row className="align-items-center my-5">
          {isPending ? (
            <Spin size="large" className="my-5" />
          ) : (
            dataServices.map((service) => (
              <Col
                data-aos="fade-up"
                data-aos-duration="1200"
                key={service.id}
                className="col-12 col-sm-6 col-xs-4 col-lg-3 col-cart-sr"
              >
                <CartService {...service} />
              </Col>
            ))
          )}
        </Row>
      </section>
    </>
  );
}
