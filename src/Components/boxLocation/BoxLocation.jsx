import React from "react";
import "./BoxLocation.css";
import { Link } from "react-router-dom";
export default function BoxLocation(props) {
  return (
    <div className="location-page border-1">
      <span className="item-location">
        <Link to="/" className="nav-link">
          خانه
        </Link>
      </span>
      <span className="arrow-location">/</span>
      <span className="item-location">
        <Link to={`${props.linkCateLoc}`} className="nav-link">
          {props.cateLoc}
        </Link>
      </span>
      <span className="arrow-location">/</span>
      {props.category && (
        <>
          <span className="item-location">
            <Link to={`${props.linkCategory}`} className="nav-link">
              {props.category}
            </Link>
          </span>
          <span className="arrow-location">/</span>
        </>
      )}
      <span className="item-location-active">
        <Link to={`${props.linkLocOrg}`} className="nav-link">
          {props.locOrg}
        </Link>
      </span>
    </div>
  );
}
