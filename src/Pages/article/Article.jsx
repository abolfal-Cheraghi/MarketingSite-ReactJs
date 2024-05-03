import React, { useEffect, useState } from "react";
import "./Article.css";
import Header from "../../Components/header/Header";
import { Col, Container, Row } from "react-bootstrap";
import BoxLocation from "../../Components/boxLocation/BoxLocation";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaTelegram,
  FaWhatsapp,
  FaFacebook,
  FaRegComment,
  FaTwitter,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import SliderServise from "../../Components/sliderServise/SliderServise";
import { Spin } from "antd";
import DOMPurify from "dompurify";
export default function Article() {
  const [dataArticle, setDataArticle] = useState({});
  const [articleBody, setArticleBody] = useState();
  const [isPending, setISPending] = useState(true);
  let idArticle = useParams().articleId;

  useEffect(() => {
    axios.get(`http://localhost:5000/articles/${idArticle}`).then((res) => {
      setDataArticle(res.data);
      setArticleBody(res.data.desc);
      setISPending(false);
      console.log(dataArticle.title);
    });
  }, []);
  return (
    <>
      <Container>
        {isPending ? (
          <div className="con-spin">
            <Spin size="large" />
          </div>
        ) : (
          <>
            <BoxLocation
              cateLoc="مقالات"
              linkCateLoc="/articles"
              category={dataArticle.category}
              linkCategory={`/article-category/${dataArticle.category}`}
              locOrg={`${dataArticle.title}`}
              linkLocOrg={`/article/${dataArticle.id}`}
            />

            <section className="sec-aritcle">
              <Row>
                <Col className="col-12 col-xs-12 col-lg-9">
                  <Col className="col-12 col-xs-12 col-lg-8"></Col>
                  <div className="info-content border-1 mt-3">
                    <div className="header">
                      <img
                        src={dataArticle.image}
                        alt="img service"
                        className="img-page"
                      />
                      <h1 className="textColor1 my-3">{dataArticle.title}</h1>
                    </div>
                    <div className="box-intoro">
                      <div className="right">
                        <span className="size12">
                          <MdOutlineDateRange size="14px" className="me-1" />
                          {dataArticle.date}
                        </span>
                        <span className="size12">
                          <FaRegComment size="14px" className="me-1" />
                          {dataArticle.countComments == 0
                            ? "بدون دیدگاه"
                            : dataArticle.countComments + "کامنت"}
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
                    <div className="my-3">
                      <div
                        className="textGray desc-any"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(articleBody),
                        }}
                      ></div>
                    </div>
                  </div>
                </Col>
                <Col className="col-12 col-xs-12 col-lg-3">
                  <div className="">
                    <SliderServise />
                  </div>
                </Col>
              </Row>
            </section>
          </>
        )}
      </Container>
    </>
  );
}
