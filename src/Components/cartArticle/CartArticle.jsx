import React from "react";
import "./CartArticle.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function CartArticle(props) {
  const sliceTitle = props.title.slice(0, 56) + "...";
  return (
    <div className="con-cart-article">
      <div className="img-box-cart-article">
        <img src={props.image} alt="blog image" />
      </div>
      <div className="content-box-cart-article">
        <span className="textGray date">{props.date}</span>
        <Link
          to={`/article/${props.id}`}
          className="nav-link textBlack title-cart-b"
        >
          {props.title.length < 56 ? props.title : sliceTitle}
        </Link>
        <p className="textGray size12" style={{ marginBottom: "0 !important" }}>
          {props.desc.slice(0, 90)} و...
        </p>
        <Link to={`/article/${props.id}`} className="nav-link">
          <span className="read-more textColor1 snas-medium">
            مشاهده جزییات <FaArrowLeftLong size="10px" />
          </span>
        </Link>
      </div>
    </div>
  );
}
