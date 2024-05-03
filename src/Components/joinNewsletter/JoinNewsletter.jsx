import React, { memo, useState } from "react";
import "./JoinNewsletter.css";
import axios from "axios";
import Swal from "sweetalert2";
function JoinNewsletter() {
  const [emailUser, setEmailUser] = useState({});
  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const sendEmailHandler = () => {
    if (emailUser.email) {
      if (emailRegex.test(emailUser.email)) {
        axios
          .post("http://localhost:5000/EmailsJoinNewsletter", emailUser)
          .then((success) => {
            setEmailUser({});
            Swal.fire({
              position: "center",
              icon: "success",
              title: "ایمل شما ارسال شد !",
              showConfirmButton: false,
              timer: 2000,
            });
          })
          .catch((error) => {
            Swal.fire({
              position: "right",
              icon: "warning",
              title: "متاسفیم",
              text: " مشکل از سرور ماس ، مجدد تلاش کنید",
              showConfirmButton: false,
              timer: 2000,
            });
          });
      } else {
         Swal.fire({
           position: "right",
           icon: "warning",
           text: "ایمیل را درست وارد کن دادا 😕",
           showConfirmButton: false,
           timer: 2000,
         });
      }
    } else {
      Swal.fire({
        position: "right",
        icon: "warning",
        text: "لطفا اول ایمیل را وارد کن بعد ارسال و بزن 🤨",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <form>
      <div className="box-input-join-newsletter">
        <input
          type="text"
          placeholder="ایمیل شما"
          onChange={(e) => {
            setEmailUser({ ...emailUser, email: e.target.value });
            console.log(emailUser);
          }}
          name="email"
        />
        <button onClick={sendEmailHandler} type="button">
          ارسال
        </button>
      </div>
    </form>
  );
}
export default memo(JoinNewsletter);
