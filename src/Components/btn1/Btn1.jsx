import React from "react";
import "./btn1.css";
import { Link } from "react-router-dom";

export default function Btn1(props) {
  return (
    <Link className="nav-link" to={props.link}>
      <button className="btn1">
        {props.text} {props.children}
      </button>
    </Link>
  );
}
