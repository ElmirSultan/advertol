import React, { useEffect, useState } from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({active,setActive}) => {

  return (
    <footer>
      <div className="footer-in">
        <div className="footer-left">
          <h1>ADVERTOL</h1>
          <div className="icons">
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
            <FaFacebookSquare className="icon" />
          </div>
        </div>

        <div className="footer-right">
          <Link
            to={"/"}
            className={`${active === "" ? "active" : "link"}`}
            onClick={() => setActive("")}
          >
            Home
          </Link>
          <Link
            to={"/services"}
            className={`${active === "services" ? "active" : "link"}`}
            onClick={() => setActive("services")}
          >
            Services
          </Link>
          <Link
            to={"/works"}
            className={`${active === "works" ? "active" : "link"}`}
            onClick={() => setActive("works")}
          >
            Our Works
          </Link>
          <Link>Contact</Link>
        </div>
      </div>

      <div className="copyright">
        <p>© Copyright 2023 - Mil. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
