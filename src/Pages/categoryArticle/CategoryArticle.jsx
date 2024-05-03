import React, { useEffect, useState } from "react";
import "./CategoryArticle.css";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import CartArticle from "../../Components/cartArticle/CartArticle";
import Aos from "aos";
export default function CategoryArticle() {
  const [dataCategory, setDataCategorie] = useState([]);
  const [isPending, setIsPending] = useState(true);
  let categoryName = useParams().category;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/?category=${categoryName}`)
      .then((res) => {
        setDataCategorie(res.data);
        setIsPending(false);
      });
    Aos.init();
  }, []);
  return (
    <Container>
      {isPending ? (
        <div className="con-spin">
          <Spin size="large" />
        </div>
      ) : (
        <section className="section-category mt-5 ">
          <div
            className="d-flex flex-column align-items-center gap-2 "
            data-aos="zoom-out-left"
            data-aos-duration="800"
          >
            <div className="top-title">دسته بندی</div>
            <h2 className="title-any">{categoryName}</h2>
          </div>
          <Row
            className="mt-5"
            style={{ marginBottom: "120px" }}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {dataCategory.map((article) => (
              <Col className="col-12 col-xs-12 col-lg-6" key={article.id}>
                <CartArticle {...article} />
              </Col>
            ))}
          </Row>
        </section>
      )}
    </Container>
  );
}
