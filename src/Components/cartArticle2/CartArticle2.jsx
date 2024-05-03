import React from "react";
import "./CartArticle2.css";
import { Link } from "react-router-dom";
import Btn2 from "../Btn2/Btn2";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function CartArticle2(props) {
  return (
    <div
      className="con-cart-article2"
      style={{
        backgroundImage: `url(${props.image})`,
        height: `${props.height}px`,
      }}
    >
      <div className="content-cart-2">
        <span className={`size12 textWhite ${props.className}`}>
          {props.date}
        </span>
        <Link to={`/article/${props.id}`} className="nav-link title-cart2">
          {props.title}
        </Link>
        {props.showBtn == true && (
          <Link
            to={`/article/${props.id}`}
            className="nav-link read-more-blog"
          >
            <span className="read-more textWhite">
              مشاهده مقاله
              <FaArrowLeftLong size="10px" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

CartArticle2.defaultProps = {
  showBtn: false,
};
