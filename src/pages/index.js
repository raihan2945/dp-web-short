import React, { useEffect, useState } from "react";
import Head from "next/head";
import AboutUs from "../components/AboutUs/AboutUs";
import EducationAndTarining from "../components/EducationAndTraining/EducationAndTraining";
import Experience from "../components/Experience/Experience";
import HeroSection from "../components/Hero/HeroSection";
import axios, { all } from "axios";
import Chamber from "../components/Chamber/Chamber";
import Speciality from "../components/Speciality/Speciality";
import Gallery from "../components/Gallery/Gallery";
import VideoGallery from "../components/VideoGallery/VideoGallery";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Layout/Header/Footer";
import Personal from "../components/Personal/Personal";

export default function Home() {
  const [allData, setAllData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  const getAllData = async () => {
    setLoading(true);
    const data = await axios.get("./context.json");
    setAllData(data.data);

    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#F7F8FA" }}>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta charset="UTF-8" />
          <title>[DP_DOCTOR_FULL_TITLE]</title>
          <meta name="description" content="[DP_DOCTOR_DESCRIPTION]" />
          <meta name="keywords" content="[DP_DOCTOR_KEYWORDS]" />
          <meta name="author" content="Digipathy" />
          <meta property="og:image" content="https://digipathy.com/share.png" data-qmeta="ogImage" />
          <meta property="og:image:width" content="1200" data-qmeta="ogImageWidth" />
          <meta property="og:image:height" content="627" data-qmeta="ogImageHeight" />
          <meta property="fb:app_id" content="1545070339179788" data-qmeta="fbAppId" />
          <link rel="icon" href="/favicon.ico" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />

          <link href="fonts/Axiforma-Bold.ttf"></link>

          {/* <!-- Template Main CSS File --> */}
          <link href="assets/css/style.css" rel="stylesheet"></link>
          <link href="assets/css/hero.css" rel="stylesheet"></link>
          <link href="assets/css/header.css" rel="stylesheet"></link>
          <link href="assets/css/about-us.css" rel="stylesheet"></link>
          <link href="assets/css/education.css" rel="stylesheet"></link>
          <link href="assets/css/experience.css" rel="stylesheet"></link>
          <link href="assets/css/chamber.css" rel="stylesheet"></link>
          <link href="assets/css/speciality.css" rel="stylesheet"></link>
          <link href="assets/css/gallery.css" rel="stylesheet"></link>
          <link href="assets/css/video-gallery.css" rel="stylesheet"></link>
          <link href="assets/css/contact-us.css" rel="stylesheet"></link>
          <link href="assets/css/footer.css" rel="stylesheet"></link>

          {/* font awesome */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link>
        </Head>
        {loading ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ textAlign: "center", verticalAlign: "center" }}>loading</h1>
          </div>
        ) : (
          <main>
            {allData && (
              <section id="hero" className="d-flex align-items-center">
                <HeroSection data={allData} />
              </section>
            )}

            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <nav className="main-nav" id="navbar-example2">
                      <div className="nav-bar">
                        <input type="checkbox" id="nav-check" />
                        <div className="nav-btn">
                          <label htmlFor="nav-check">
                            <span />
                            <span />
                            <span />
                          </label>
                        </div>
                        <div className="nav-links">
                          <a href="#about">About Doctor</a>
                          <a href="#education">Education</a>
                          {allData && Array.isArray(allData?.Experiences) && allData?.Experiences?.length > 0 && <a href="#experience">Experiences</a>}
                          {allData && Array.isArray(allData?.Chambers) && allData?.Chambers?.length > 0 && <a href="#chamber">Chamber</a>}
                          {allData && Array.isArray(allData?.SubSpeciality) && allData?.SubSpeciality?.length > 0 && <a href="#speciality">Speciality & Services</a>}

                          {allData && Array.isArray(allData?.Photos) && allData?.Photos?.length > 0 && <a href="#gallery">Gallery</a>}
                          {allData && Array.isArray(allData?.VideoLinks) && allData?.VideoLinks?.length > 0 && <a href="#video-gallery">Video Gallery</a>}
                          {allData && Array.isArray(allData?.BlogFeeds) && allData?.BlogFeeds?.length > 0 && <a href="feeds/#blog-feeds">Blog Feeds</a>}
                          <a href="#contact">Contact Us</a>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </header>

            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
              <section id="about" className="about-video">
                {allData?.Bio && <AboutUs data={allData} />}
              </section>
              {allData?.LifeFamily && (
                <section id="personal" className="about-video">
                  <Personal data={allData} />
                </section>
              )}
              {allData && (
                <section id="education" className="">
                  <EducationAndTarining educations={allData?.Educations} trainings={allData?.Trainings} researchs={allData?.Researchs} />
                </section>
              )}
              {Array.isArray(allData?.Experiences) && allData?.Experiences?.length > 0 && (
                <section id="experience" className="experience">
                  <Experience data={allData} />
                </section>
              )}
              {allData && Array.isArray(allData?.Chambers) && allData?.Chambers?.length > 0 && (
                <section id="chamber" className="chamber">
                  <Chamber data={allData} />
                </section>
              )}
              {allData && (
                <section id="speciality" className="speciality">
                  <Speciality data={allData} />
                </section>
              )}
              {allData && Array.isArray(allData?.Photos) && allData?.Photos?.length > 0 && (
                <section id="gallery" className="gallery">
                  <Gallery data={allData} />
                </section>
              )}
              {allData && Array.isArray(allData?.VideoLinks) && allData?.VideoLinks?.length > 0 && (
                <section id="video-gallery" className="video-gallery">
                  <VideoGallery data={allData} />
                </section>
              )}
              <section id="contact-us" className="contact-us">
                <ContactUs data={allData} />
              </section>
              <section id="footers" className="footer">
                <Footer data={allData} />
              </section>
            </div>
          </main>
        )}
      </div>

      {/* <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="fas fa-arrow-up"></i>
      </a> */}
      {/* 👇️ scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          visibility: isVisible ? "visible" : "hidden",
          position: "fixed",
          padding: ".3rem .7rem",
          fontSize: "22px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#0032B7",
          color: "#fff",
          textAlign: "center",
          border: "none",
          transition: "1s all",
        }}
      >
        <i class="fas fa-arrow-circle-up"></i>
      </button>
      {/* ---------------------------------------- */}
      {/* Modal */}
      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------- */}
    </>
  );
}
