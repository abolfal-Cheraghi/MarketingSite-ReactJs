import React, { useEffect, useState } from "react";
import "./Articles.css";
import Header from "../../Components/header/Header";
import { Container, Col, Row } from "react-bootstrap";
import CartArticle from "../../Components/cartArticle/CartArticle";
import axios from "axios";
import { Link } from "react-router-dom";
import CartArticle2 from "../../Components/cartArticle2/CartArticle2";
import { Spin } from "antd";
import Aos from "aos";
import BannerArticle from "../../Components/bannerArticle/BannerArticle";
export default function Articles() {
  const [dataArticles, setDataArticles] = useState([]);
  const [categoryArticles, setCategoryArticles] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/articles").then((res) => {
      setDataArticles(res.data);
      setIsPending(false);
    });
    axios.get("http://localhost:5000/categoryArticle").then((resCate) => {
      setCategoryArticles(resCate.data);
    });
    Aos.init();
  }, []);
  return (
    <>
      {isPending ? (
        <div className="con-spin">
          <Spin size="large" />
        </div>
      ) : (
        <Container>
          <section className="section-hero-articles my-5">
            <Row>
              <Col
                className="col-12 col-xs-2 col-lg-2 mt-3"
                data-aos="zoom-out-left"
                data-aos-duration="800"
              >
                <div className="box-category-blog">
                  <ul className="list-cate-blog ">
                    {categoryArticles.map((item) => (
                      <Link
                        to={`/article-category/${item.label}`}
                        className="nav-link"
                        key={item.id}
                      >
                        <li>{item.label}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col
                className="col-12 col-xs-2 col-lg-10 mt-3"
                data-aos="zoom-out-right"
                data-aos-duration="800"
              >
                <Row>
                  <Col className="col-12 col-xs-12 col-lg-6 mt-3">
                    <CartArticle2
                      {...dataArticles[dataArticles.length - 1]}
                      height="380"
                    />
                  </Col>
                  <Col className="col-12 col-xs-12 col-lg-6 mt-3">
                    <Row>
                      <Col className="col-12 col-xs-12 col-lg-12">
                        <CartArticle2
                          {...dataArticles[dataArticles.length - 2]}
                          height="180"
                        />
                      </Col>
                      <Col className="col-12 col-xs-6 col-lg-6 mt-3">
                        <CartArticle2
                          {...dataArticles[dataArticles.length - 3]}
                          height="180"
                        />
                      </Col>
                      <Col className="col-12 col-xs-6 col-lg-6  mt-3">
                        <CartArticle2
                          {...dataArticles[dataArticles.length - 4]}
                          height="180"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>

          {/* section all article */}
          <section className="my-5">
            <div className="d-flex flex-column align-items-center gap-2 my-4">
              <div className="top-title">مقالات</div>
              <h2 className="title-any">آخرین اخبار سایت</h2>
            </div>
            <Row className="gx-4">
              {dataArticles.map((article) => (
                <Col
                  className="col-12 col-xs-12 col-lg-6 my-3"
                  key={article.id}
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <CartArticle {...article} />
                </Col>
              ))}
            </Row>
          </section>

          <div className="my-5">
            <BannerArticle />
          </div>
        </Container>
      )}
    </>
  );
}
