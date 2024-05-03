import React from "react";
import "./BoxServisec.css";
export default function BoxServisec(props) {
  return (
    <div className="box-servisec">
      <div className="icon-box">
        <img src={props.imgService} alt="" className="" />
      </div>
      <div className="content-box">
        <h6 className="textBlack snas-medium">{props.titleService}</h6>
        <span className="textGray size12">{props.descService}</span>
      </div>
    </div>
  );
}

BoxServisec.defaultProps = {
  descService:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاد از طراحان گرافیک است.",
};
