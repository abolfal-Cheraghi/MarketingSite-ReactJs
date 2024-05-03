import React from "react";
import "./CartTariife.css";
import checkImg from "../../assets/images/check-.svg";
import notCheckImg from "../../assets/images/notCheck.svg";
import Btn1 from "../btn1/Btn1";
export default function CartTariife(props) {
//   const validationLists = (item) => {
//     if (item == 1) {
//       if (props.type == "webDesign") {
//         props.AppropriateSpeed ? checkImg : notCheckImg;
//       } else if (props.type == "seo") {
//         props.SiteOptimization ? checkImg : notCheckImg;
//       }
//     } else if (item == 2) {
//       if (props.type == "webDesign") {
//         props.ExclusiveDesign ? checkImg : notCheckImg;
//       } else if (props.type == "seo") {
//         props.ImproveInternalSEO ? checkImg : notCheckImg;
//       }
//     } else if (item == 3) {
//       if (props.type == "webDesign") {
//         props.MonthlySupport ? checkImg : notCheckImg;
//       } else if (props.type == "seo") {
//         props.Targetedُtrategy ? checkImg : notCheckImg;
//       }
//     } else if (item == 4) {
//       if (props.type == "webDesign") {
//         props.AddProduct ? checkImg : notCheckImg;
//       } else if (props.type == "seo") {
//         props.InternalLinking ? checkImg : notCheckImg;
//       }
//     } else if (item == 5) {
//       if (props.type == "webDesign") {
//         props.GraphicDesign ? checkImg : notCheckImg;
//       } else if (props.type == "seo") {
//         props.TechnicalSEO ? checkImg : notCheckImg;
//       }
//     } else if (item == 6) {
//       if (props.type == "webDesign") {
//         props.buyHostDomain ? checkImg : notCheckImg;
//       } else if (props.type == "seo") {
//         props.ContentWriting ? checkImg : notCheckImg;
//       }
//     }
//   };
  return (
    <div className="con-cart-tariife">
      <div className="hover-box"></div>
      <div className="box-cart">
        <div className="header-box-cart">
          <div className="title textColor1 snas-medium size12">
            <span className="title textColor1 snas-medium size12">
              {props.Plan}
            </span>
          </div>
          <h2 className="price-tariife">
            {props.planPrice} <span className="snas-medium">تومان</span>
          </h2>
        </div>

        <div className="body-box-cart">
          <p className="textGray size12 text-center">{props.desc}</p>

          <div className="list-cart-tariffe">
            <div className="list-item-cart">
              <img
                src={
                  props.SiteOptimization || props.SiteOptimization
                    ? checkImg
                    : notCheckImg
                }
                alt="checked"
                className="img-fluid"
              />
              <p className="textGray size12 snas-medium">
                {props.type == "seo" ? "بهینه سازی سایت" : "سرعت مناسب"}
              </p>
            </div>

            <div className="list-item-cart">
              <img
                src={
                  props.ImproveInternalSEO || props.ExclusiveDesign
                    ? checkImg
                    : notCheckImg
                }
                alt="checked"
                className="img-fluid"
              />
              <p className="textGray size12 snas-medium">
                {props.type == "seo"
                  ? "بهبود سئوی داخلی"
                  : "طراحی ui ux اختصاصی"}
              </p>
            </div>

            <div className="list-item-cart">
              <img
                src={
                  props.Targetedُtrategy || props.MonthlySupport
                    ? checkImg
                    : notCheckImg
                }
                alt="checked"
                className="img-fluid"
              />
              <p className="textGray size12 snas-medium">
                {props.type == "seo"
                  ? "تعیین استراتژی هدفمند"
                  : " پشتیبانی ماهانه"}
              </p>
            </div>

            <div className="list-item-cart">
              <img
                src={
                  props.InternalLinking || props.AddProduct
                    ? checkImg
                    : notCheckImg
                }
                alt="checked"
                className="img-fluid"
              />
              <p className="textGray size12 snas-medium">
                {props.type == "seo"
                  ? "لینک سازی خارجی"
                  : " اضافه کردن محصولات"}
              </p>
            </div>

            <div className="list-item-cart">
              <img
                src={
                  props.TechnicalSEO || props.GraphicDesign
                    ? checkImg
                    : notCheckImg
                }
                alt="checked"
                className="img-fluid"
              />
              <p className="textGray size12 snas-medium">
                {props.type == "seo" ? "بهبود سئوی تکنیکال" : " طراحی گرافیک"}
              </p>
            </div>

            <div className="list-item-cart">
              <img
                src={
                  props.ContentWriting || props.buyHostDomain
                    ? checkImg
                    : notCheckImg
                }
                alt="checked"
                className="img-fluid"
              />
              <p className="textGray size12 snas-medium">
                {props.type == "seo" ? "محتوا نویسی " : "خرید هاست و دامین"}
              </p>
            </div>
          </div>

          <div className="my-3 btn-cart-tariife">
            <Btn1 text="مشاوره و سفارش" link="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
