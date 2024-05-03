import React, { useEffect, useState } from "react";
import "./Projects.css";
import Header from "../../Components/header/Header";
import axios from "axios";
import { Spin } from "antd";
import { Col, Row } from "react-bootstrap";
import CartProject from "../../Components/cartProject/CartProject";
import Footer from "../../Components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Projects() {
  const [valueTab, setValueTab] = useState("all");
  const [dataProjects, setDataProjects] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    if (valueTab == "all") getDataAllProjects();
    else if (valueTab == "shopping") getDataProjects("فروشگاهی");
    else if (valueTab == "bussines") getDataProjects("شرکتی");
    else if (valueTab == "Innovative") getDataProjects("خلاقانه");
    else if (valueTab == "magazine") getDataProjects("مجله ای");

    Aos.init();
  }, [valueTab]);

  // function get data with value tab

  const getDataProjects = (path) => {
    axios
      .get(`http://localhost:5000/projects/?category=${path}`)
      .then((res) => {
        setDataProjects(res.data);
        setIsPending(false);
      });
  };

  const getDataAllProjects = (path) => {
    axios.get(`http://localhost:5000/projects`).then((res) => {
      setDataProjects(res.data);
      setIsPending(false);
    });
  };

  // change Tab Handler
  const changeTab = (e) => {
    setValueTab(e.target.name);
    setIsPending(true);
  };
  return (
    <>
      <section className="section-projects container">
        <div className="info-sec">
          <div className="top-title">نمونه کارها</div>
          <h2 className="title-sec-project textBlack">
            برخی از نمونه کارهای ما
          </h2>
        </div>

        <div className="wrapper-btn-tab">
          <button
            className={`tab-btns ${valueTab === "all" ? "active-btn-tab" : ""}`}
            name="all"
            onClick={changeTab}
            type="button"
          >
            همه نمونه کار ها
          </button>
          <button
            className={`tab-btns ${
              valueTab === "shopping" ? "active-btn-tab" : ""
            }`}
            name="shopping"
            onClick={changeTab}
            type="button"
          >
            فروشگاهی
          </button>
          <button
            className={`tab-btns ${
              valueTab === "bussines" ? "active-btn-tab" : ""
            }`}
            name="bussines"
            onClick={changeTab}
            type="button"
          >
            شرکتی
          </button>
          <button
            className={`tab-btns ${
              valueTab === "Innovative" ? "active-btn-tab" : ""
            }`}
            name="Innovative"
            onClick={changeTab}
            type="button"
          >
            خلاقانه
          </button>
          <button
            className={`tab-btns ${
              valueTab === "magazine" ? "active-btn-tab" : ""
            }`}
            name="magazine"
            onClick={changeTab}
            type="button"
          >
            مجله ای
          </button>
        </div>
        <Row className="my-3">
          {isPending ? (
            <Spin size="large" className="my-5" />
          ) : (
            dataProjects.map((project) => (
              <Col
                key={project.id}
                className="col-12 col-xs-4 col-lg-3 my-3"
                data-aos="fade-in"
                data-aos-duration="1200"
              >
                <CartProject {...project} />
              </Col>
            ))
          )}
        </Row>
      </section>
    </>
  );
}
