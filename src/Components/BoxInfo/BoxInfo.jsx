import React from "react";
import "./BoxInfo.css";
import CountUp from "react-countup";
export default function BoxInfo() {
  return (
    <div className="wrapper-box-info">
      <div className="item-box-info border-add">
        <span className="counter-info">
          <CountUp end={734} duration={10} />+
        </span>
        <div className="textBlack snas-bold title-div">پروژه های انجام شده</div>
        <p className="textGray size12 text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          میباشد.
        </p>
      </div>
      <div className="item-box-info border-add">
        <span className="counter-info">
          <CountUp end={568} duration={10} />+
        </span>
        <div className="textBlack snas-bold">کارفرماهای راضی</div>
        <p className="textGray size12 text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          میباشد.
        </p>
      </div>
      <div className="item-box-info">
        <span className="counter-info">
          <CountUp end={138} duration={10} />+
        </span>
        <div className="textBlack snas-bold">نظرات مشتریان</div>
        <p className="textGray  text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          میباشد.
        </p>
      </div>
    </div>
  );
}
