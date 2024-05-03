import React from "react";
import "./CartService.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function CartService(props) {
  return (
    <div className="con-cart-service">
      <div className="img-box-sr">
        <img src={props.imgSr} alt="" className="img-sr img-fluid" />
        <div className="overlay-in-img"></div>
      </div>
      <div className="info-cart-sr">
        <h4 className="title-sr-cart textBlck">{props.titleSr}</h4>
        <p className="size12 textGray desc-sr">{props.desc}</p>
        <Link to={`/service/${props.id}`} className="nav-link">
          <span className="read-more-cart-sr">
            درخواست پروژه <FaArrowLeftLong size="10px" />
          </span>
        </Link>
      </div>
      <div className="box-zero-cart"></div>
    </div>
  );
}

CartService.defaultProps = {
  desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...",
};
