import React from "react";
import "./CartComment.css";
import commentIcon from "../../assets/images/comment-icon-1.svg";
import { FaStar } from "react-icons/fa6";
export default function CartComment(props) {
  return (
    <div className="con-cart-comment">
      <img src={commentIcon} alt="" className="icon-comment" />
    <img src={props.profile} alt="profile" className="profile-user" />
      <div className="info-comment">
        <span className="textBlack snas-bold">{props.fullName}</span>
        <span className="textGray size12">{props.brand}</span>
        <p className="textGray size12">{props.desc}</p>
        <div className="wrapper-star">
          <FaStar size="14px" />
          <FaStar size="14px" />
          <FaStar size="14px" />
          <FaStar size="14px" />
          <FaStar size="14px" />
        </div>
      </div>
      <div className="circle-cart"></div>
    </div>
  );
}
