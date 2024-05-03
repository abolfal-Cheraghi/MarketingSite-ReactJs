import React from "react";
import "./CartMember.css";
import { FaRegStar } from "react-icons/fa";
export default function CartMember(props) {
  return (
    <div className="con-cart-member">
      <div
        className="img-user-us"
        style={{
          backgroundImage:
            `url(${props.picUser})`,
        }}
      ></div>
      <div className="box-info-user">
        <div className="info">
          <span className="name-user-us textBlack ">{props.fullName}</span>
          <span className="textGray size12 snas-medium">{props.job}</span>
        </div>
        <div className="star">
          {props.star}
          <FaRegStar size="18px" />
        </div>
      </div>
    </div>
  );
}
