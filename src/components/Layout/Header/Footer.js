import Link from "next/link";
import React, { useState } from "react";
import ModalUI from "../../UI/Modal";

const Footer = ({ data }) => {
  return (
    <>
      <div className="footer">
        <div className="container footer-bottom clearfix">
          <div className="nav-links">
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
              }}
              href="#about"
            >
              About doctor
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
              }}
              href="#education"
            >
              Education
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
              }}
              href="#experience"
            >
              Experiences
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
              }}
              href="#chamber"
            >
              Chamber
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
              }}
              href="#speciality"
            >
              Speciality & Services
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
              }}
              href="#gallery"
            >
              Gallery
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
              }}
              href="#video-gallery"
            >
              Video Gallery
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
              }}
              href="#contact"
            >
              Contact Us
            </a>
          </div>

          <div
            className="facebook"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
              margin: "2rem 0rem",
            }}
          >
            {Array.isArray(data?.MediaLinks) &&
              data?.MediaLinks?.length > 0 &&
              data?.MediaLinks?.map((item) => {
                let url = item?.value;
                if (!item?.value.match(/^http?:\/\//i) || !url.match(/^https?:\/\//i)) {
                  url = "http://" + item?.value;
                }
                return (
                  <div className="icon-box">
                    <Link
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "1rem",
                      }}
                      href={`${url}`}
                    >
                      <i className={`fab fa-${item?.key?.toLowerCase()}`}></i>
                    </Link>
                  </div>
                );
              })}
            {/* <Link href=""> <i style={{fontSize:"1.2rem"}} class="fab fa-youtube"></i></Link> */}
          </div>
          <div
            className="credits"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
            <span>
              Powered by{" "}
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
                href="digipathy.com"
              >
                {" "}
                digipathy.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
