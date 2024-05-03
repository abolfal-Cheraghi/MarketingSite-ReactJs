import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import Btn1 from "../btn1/Btn1";
import { NavbarToggle } from "react-bootstrap";
import { CiGrid41 } from "../../../node_modules/react-icons/ci";
import { BsTelephone } from "../../../node_modules/react-icons/bs";
import { FaPhone } from "../../../node_modules/react-icons/fa";

export default function Header() {
  const expand = "lg";
  return (
    <Container>
      <Navbar
        key={expand}
        expand={expand}
        className="mb-3 justify-content-between align-items-center"
      >
        <div className="right-Navbar">
          <Navbar.Brand href="#">
            <img src={Logo} alt="logo" className="logo-header" />
          </Navbar.Brand>
          <NavbarToggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
            <CiGrid41 size="32px" />
          </NavbarToggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={Logo} alt="logo" className="logo-offcanvas" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to="/" className="nav-link">
                  صفحه اصلی
                </NavLink>
                <NavLink to="/articles" className="nav-link">
                  وبلاگ
                </NavLink>
                <NavLink to="/services" className="nav-link">
                  خدمات
                </NavLink>
                <NavLink to="/projects" className="nav-link">
                  پروژه ها
                </NavLink>
                <NavLink to="/about" className="nav-link">
                  درباره ما
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  تماس با ما
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
        <div className="d-flex gap-3">
          <div className="link-icon-call">
            <Link to="/contact" className="nav-link">
              <BsTelephone size="18px" />
            </Link>
          </div>
          <div className="box-contact-nav flex-all gap-2">
            <span className="icon-contact-nav flex-all">
              <FaPhone size="18px" />
            </span>
            <div className="d-flex flex-column size12">
              <span className="textBlack fw-bold">تلفن تماس :</span>
              <span className="textGray">1234567 - 035</span>
            </div>
          </div>
          <div className="btn-tarefe">
            <Btn1 text="لیست تعرفه های ما"></Btn1>
          </div>
        </div>
      </Navbar>
    </Container>
  );
}
