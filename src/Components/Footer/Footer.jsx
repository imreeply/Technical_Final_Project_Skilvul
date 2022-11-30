import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoTwitter, IoLogoFacebook } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  <IoLogoFacebook className="iconSosmed" size={30} />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  <IoLogoTwitter className="iconSosmed" size={30} />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  <IoLogoInstagram className="iconSosmed" size={30} />
                </a>
              </li>
            </ul>
            <p className="text-center text-muted">
              <img className="logoFooter" src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669133626/MyNature/Logo_m36xes.svg" alt="" />
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
