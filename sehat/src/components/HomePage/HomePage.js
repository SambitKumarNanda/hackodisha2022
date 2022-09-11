import React from "react";
import { NavLink } from "react-router-dom";
import "../HomePage/css/homepagestyle.css";
import image1 from "../HomePage/images/apllo-hospital.webp";
import image2 from "../HomePage/images/amri-hospital.jpg";
import image3 from "../HomePage/images/sparsh-hospital.jpg";
import icon from "../HomePage/images/icon.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  FaBed,
  FaBriefcaseMedical,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function HomePage() {
  let serviceIconStyle = {
    fontSize: "3.2rem",
    padding: "1.6rem",
    borderRadius: "10%",
  };
  return (
    <>
      <header className="header">
        <div className="hero">
          <div className="hero-text-container">
            <p className="hero-text">We Care About Your Health</p>
            <p className="textbox">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis porro tempore quibusdam molestias rerum dignissimos
              omnis veniam cupiditate quod cum, quae possimus saepe, sequi ullam
              voluptatibus odio eligendi facere eos.
            </p>
          </div>
          <div className="btn-container">
            <button className="find-hospital-btn">
              <NavLink to="/find-hospital">Find Hospital</NavLink>
            </button>
            <button className="covid19-info-btn">COVID-19 Information</button>
          </div>
        </div>
      </header>

      <section className="extra-text-container">
        <p className="extra-text">
          Find the right <span className="underline-small">hospital</span>
        </p>
        <p className="extra-text">at your fingertips</p>
      </section>

      <section className="section-info">
        <div className="container">
          <div className="grid grid--2-cols">
            <div className="infographics">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium debitis eius ipsa nesciunt non quia quos repellat
              saepe soluta voluptas. Doloremque eveniet illum itaque magnam modi
              nisi quidem quisquam, sint.
            </div>
            <div className="image-container">
              <img
                src={image1}
                alt="Apollo Hospital"
                className="hospital-imgs img-1"
              />
              <img
                src={image2}
                alt="Amri Hospital"
                className="hospital-imgs img-2"
              />
              <img
                src={image3}
                alt="Sparsh Hospital"
                className="hospital-imgs img-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-services">
        <div className="container center-text-flex">
          <h2 className="heading-secondary underline-medium">Our Services</h2>
        </div>
        <div className="container grid grid--3-cols">
          <div className="service">
            <div className="icon-container">
              <AiOutlineClockCircle size="3.2rem" className="service-icons" />
            </div>
            <p class="service-title">24 hour service</p>
          </div>
          <div class="service">
            <div className="icon-container">
              <FaBed className="service-icons" size="3.2rem" />
            </div>
            <p class="service-title">Know about bed vacancy</p>
          </div>
          <div class="service">
            <div className="icon-container">
              <FaBriefcaseMedical className="service-icons" size="3.2rem" />
            </div>
            <p class="service-title">Get doctor consultancy</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="#" className="footer-logo">
              <img src={icon} alt="Sehat logo" class="logo" />
            </a>

            <ul className="social-links">
              <li>
                <a className="footer-link" href="#">
                  <FaInstagram className="social-icons" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <FaFacebook className="social-icons" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <FaTwitter className="social-icons" />
                </a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; 2022 by Sehat, Inc. All rights reserved
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                Silicon Institute Of Technology, BBSR, Odisha
              </p>
              <a className="footer-link" href="tel:91 0123456789">
                +91 0123456789
              </a>
              <br />
              <a className="footer-link" href="mailto:sehat@gmail.com">
                sehat@gmail.com
              </a>
            </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Create Account
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Sign in
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  iOs app
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  About Sehat
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  For Business
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Help center
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
