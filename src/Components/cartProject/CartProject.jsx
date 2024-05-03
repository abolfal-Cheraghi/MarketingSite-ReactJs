import React from "react";
import "./CartProject.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function CartProject(props) {
  const title = props.titlePr;

  const sliceTitle = title.slice(0, 33) + "...";
  return (
    <div className="con-cart-project">
      <div
        className="header-cart-p"
        style={{ backgroundImage: `url(${props.imgPr})` }}
      >
        <div className="box-category">
          <span />
          {props.category}
          <span />
        </div>
      </div>
      <div className="info-cart-p">
        <Link
          className="title-cart-p nav-link  textBlack"
          to={`/project/${props.id}`}
        >
          {sliceTitle}
          <br />
          <span className="read-more textGray">
            مشاهده جزییات <FaArrowLeftLong size="10px" />
          </span>
        </Link>
      </div>
    </div>
  );
}
