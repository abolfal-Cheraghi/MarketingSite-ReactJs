import React from "react";
import "./BoxList.css";
export default function BoxList(props) {
  return (
    <div className="con-box-list">
      <div className="counter">{props.counter}</div>
      <div className="content-list">
        <span className="textBlack">{props.title}</span>
        <p className="textGray">{props.desc}</p>
      </div>
    </div>
  );
}

BoxList.defaultProps = {
  desc: "لورم ایپسوم متن ساختگی با تولید میباشد.",
};
