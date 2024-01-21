import Head from "next/head";
import AboutUs from "../../../components/AboutUs/AboutUs";
import EducationAndTarining from "../../../components/EducationAndTraining/EducationAndTraining";
import Experience from "../../../components/Experience/Experience";
import HeroSection from "../../../components/Hero/HeroSection";
import axios, { all } from "axios";
import { useEffect, useState } from "react";
import Chamber from "../../../components/Chamber/Chamber";
import Speciality from "../../../components/Speciality/Speciality";
import Gallery from "../../../components/Gallery/Gallery";
import VideoGallery from "../../../components/VideoGallery/VideoGallery";
import ContactUs from "../../../components/ContactUs/ContactUs";
import Footer from "../../../components/Layout/Header/Footer";
import Personal from "../../../components/Personal/Personal";
import BlogFeeds from "../../../components/BlogFeeds/BlogFeeds";

export default function Home () {
  const [allData, setAllData] = useState(null);
  const [loading, setLoading] = useState(false);


  const getAllData = async () => {
    setLoading(true);
    const data = await axios.get("/context.json");
    setAllData(data.data);

    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div>
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
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />

          {/* fonts  */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          {/* font awesome  */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
            rel="stylesheet"
          ></link>

          {/* <!-- //add bootstrap 5 css file --> */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
          ></link>

          {/* <!-- // add bootstrap 5 js file --> */}
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>

          {/* <!-- Template Main JS File --> */}
          <script src="assets/js/main.js"></script>

          {/* <!-- //add bundel js --> */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
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
            <h1 style={{ textAlign: "center", verticalAlign: "center" }}>
              loading
            </h1>
          </div>
        ) : (
          <main>

            {allData &&

              <section id="hero" className="d-flex align-items-center">
                <HeroSection data={allData} />
              </section>
            }


            <header
              className="header-area header-sticky wow slideInDown"
              data-wow-duration="0.75s"
              data-wow-delay="0s"
            >
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
                          <a href="#about">About doctor</a>
                          <a href="#education">Education</a>
                          <a href="#experience">Experiences</a>
                          <a href="#chamber">Chamber</a>
                          <a href="#speciality">Speciality & Services</a>
                          <a href="#gallery">Gallery</a>
                          <a href="#video-gallery">Video Gallery</a>
                          <a href="#contact">Contact Us</a>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </header>


            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-offset="0"
              class="scrollspy-example"
              tabindex="0"
            >
              <section id="about" className="about-video">
                {allData?.Bio &&
                  <AboutUs data={allData} />
                }
              </section>
              {allData?.LifeFamily &&
                <section id="personal" className="about-video">
                  <Personal data={allData} />
                </section>
              }
              {allData &&
                <section id="education" className="">
                  <EducationAndTarining educations={allData?.Educations} trainings={allData?.Trainings} researchs={allData?.Researchs} />
                </section>
              }
              {
                allData && allData?.Experiences &&
                <section id="experience" className="experience">
                  <Experience data={allData} />
                </section>
              }
              {
                allData && allData?.Chambers &&
                <section id="chamber" className="chamber">
                  <Chamber data={allData} />
                </section>
              }
              {
                allData &&
                <section id="speciality" className="speciality">
                  <Speciality data={allData} />
                </section>
              }
              {
                allData && allData?.Photos &&
                <section id="gallery" className="gallery">
                  <Gallery data={allData} />
                </section>
              }
              {
                allData && allData?.VideoLinks &&
                <section id="video-gallery" className="video-gallery">
                  <VideoGallery data={allData} />
                </section>
              }
              {
                allData && allData?.BlogFeeds &&
                <section id="blog-feeds" className="blog-feeds">
                  <BlogFeeds data={allData} />
                </section>
              }
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

      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="fas fa-arrow-up"></i>
      </a>

      {/* ---------------------------------------- */}
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
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
