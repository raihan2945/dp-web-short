import React from "react";

const Header = () => {
  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#about" className="active">
                  About doctor
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#education">Education</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#experience">Experiences</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#chamber">Chamber</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#speciality">Speciality & Services</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#gallery">Gallery</a>
                </li>
                <li className="scroll-to-section">
                  <div className="border-first-button">
                    <a href="#video-gallery">Video Gallery</a>
                  </div>
                </li>
                <li className="scroll-to-section">
                  <div className="border-first-button">
                    <a href="#contact">Contact Us</a>
                  </div>
                </li>
                {/* <li className="scroll-to-section">
                  <div className="border-first-button">
                    <a href="#contact">Blog</a>
                  </div>
                </li>
                <li className="scroll-to-section">
                  <div className="border-first-button">
                    <a href="#contact">Contact</a>
                  </div>
                </li> */}
              </ul>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
