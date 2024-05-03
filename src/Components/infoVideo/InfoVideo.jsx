import React, { useState } from "react";
import "./InfoVideo.css";
import imgPlay from "../../assets/images/Play.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
export default function InfoVideo() {
  const [show, setShow] = useState(false);
  return (
    <div className="con-info-video">
      <div className="btn-bodal-video" onClick={() => setShow(true)}>
        <img src={imgPlay} alt="play img" className="img-fluid" />
        <span>ویدیو معرفی</span>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <video
          src="https://halochin.ir/Technology/wp-content/uploads/2023/10/1661468732901-online-video-cutter.com_.mp4"
          className="video-info"
          controls
        ></video>
      </Modal>
    </div>
  );
}
