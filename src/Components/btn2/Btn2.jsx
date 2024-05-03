import React from "react";
import "./Btn2.css";
import { Link } from "react-router-dom";
export default function Btn2(props) {
  return (
    <Link className="nav-link" to={props.link}>
      <button className="btn2">
        {props.text} {props.children}
      </button>
    </Link>
  );
}
