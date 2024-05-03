import React from "react";
import "./TabBox.css";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Segmented } from "antd";
import seoTag from "../../assets/images/seo-tag.png";
import webDes from "../../assets/images/webDesign.png";
export default function TabBox(props) {
    
  return (
    <>
      <div className="container-tab-box">
        <Segmented
          onChange={props.changeTab}
          size="large"
          options={[
            {
              label: "خدمات طراحی سایت",
              value: "webDesign",
              icon: <img src={webDes} alt="" className="img-tab-box" />,
              className: "option-tab-box ",
            },
            {
              label: "خدمات سئو",
              value: "seo",
              icon: <img src={seoTag} alt="" className="img-tab-box" />,
              className: "option-tab-box ",
            },
          ]}
        />
      </div>
    </>
  );
}
