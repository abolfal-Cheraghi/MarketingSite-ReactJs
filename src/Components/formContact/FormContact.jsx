import React, { memo, useState } from "react";
import "./FormContact.css";
import Form from "react-bootstrap/Form";
import { TbLoader3 } from "react-icons/tb";
import axios from "axios";
import Swal from "sweetalert2";

function FormContact() {
  const [contentMessage, setContentMessage] = useState({});
  const [isPendingBtn, setIsPendingBtn] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  let phoneValidation;
  let emailValidation;
  let iranianMobileRegex = /^09\d{9}$/;
  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const changeInputHandler = (e) => {
    setContentMessage({ ...contentMessage, [e.target.name]: e.target.value });
    console.log(contentMessage);
  };

  const emptyObject = () => {
    setContentMessage({
      fullName: "",
      phone: "",
      email: "",
      Issue: "",
      desc: "",
    });
  };

  const submitSendMessage = () => {
    if (
      contentMessage.fullName &&
      contentMessage.phone &&
      contentMessage.email &&
      contentMessage.Issue &&
      contentMessage.desc
    ) {
      phoneValidation = contentMessage.phone;
      emailValidation = contentMessage.email;

      if (
        iranianMobileRegex.test(phoneValidation) &&
        emailRegex.test(emailValidation)
      ) {
        setIsPendingBtn(true);
        axios
          .post("http://localhost:5000/message", contentMessage)
          .then((succ) => {
            emptyObject();
            setIsPendingBtn(false);
            setSendSuccess(true);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "پیغام شما ارسال شد !",
              showConfirmButton: false,
              timer: 2500,
            });
          })
          .catch((error) => {
            setIsPendingBtn(false);
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "پیغام شما ارسال نشد !",
              text: "در برقراری با سرور مشکلی پیش اومده ، بعدا دوباره تلاش کنید شرمنده :)",
              showConfirmButton: false,
              timer: 2500,
            });
          });
      } else {
        Swal.fire({
          position: "top-start",
          icon: "warning",
          text: " تلفن و ایمیل را به درستی وارد کنید ",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        position: "top-start",
        icon: "warning",
        text: " تمامی فیلد هارا با دقت پر کنید!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <from className="form-contact">
      <div className="wrapper-input">
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          onChange={changeInputHandler}
          name="fullName"
          value={contentMessage.fullName}
        />
        <input
          type="text"
          placeholder="ایمیل"
          onChange={changeInputHandler}
          name="email"
          value={contentMessage.email}
        />
      </div>
      <div className="wrapper-input">
        <input
          type="text"
          placeholder="شماره تماس"
          onChange={changeInputHandler}
          name="phone"
          value={contentMessage.phone}
        />
        <input
          type="text"
          placeholder="موضوع"
          onChange={changeInputHandler}
          name="Issue"
          value={contentMessage.Issue}
        />
      </div>
      <Form.Control
        as="textarea"
        rows={6}
        className="textarea-contact"
        placeholder="پیغام شما :)"
        onChange={changeInputHandler}
        name="desc"
        value={contentMessage.desc}
      />
      <button type="submit" onClick={submitSendMessage}>
        ارسال
        {isPendingBtn && <TbLoader3 size="16px" />}
      </button>
      {sendSuccess && (
        <p className="text-success">پیام شما با موفقیت ارسال شد .</p>
      )}
    </from>
  );
}
export default memo(FormContact);
