import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import HeroSection from "../../components/Hero/HeroSection";
import axios from "axios";

const Doctor = () => {
  const params = useParams();

  const slug = params?.slug[0];

  const [allData, setAllData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  const getAllData = async (slugName) => {
    setLoading(true);
    const url = `http://localhost:6005/api/v1/doctors/${slugName}`;
    console.log("Url is : ", url);
    const { data } = await axios.get(url);
    console.log("data is : ", data);
    setAllData(data.data);

    setLoading(false);
  };

  useEffect(() => {
    if (slug) {
      getAllData(slug);
    }
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
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
          <title>{allData?.Name}</title>
          <meta name="description" content="[DP_DOCTOR_DESCRIPTION]" />
          <meta name="keywords" content="[DP_DOCTOR_KEYWORDS]" />
          <meta name="author" content="Digipathy" />
          <meta
            property="og:image"
            content="https://digipathy.com/share.png"
            data-qmeta="ogImage"
          />
          <meta
            property="og:image:width"
            content="1200"
            data-qmeta="ogImageWidth"
          />
          <meta
            property="og:image:height"
            content="627"
            data-qmeta="ogImageHeight"
          />
          <meta
            property="fb:app_id"
            content="1545070339179788"
            data-qmeta="fbAppId"
          />
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
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
            rel="stylesheet"
          ></link>
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
            {allData && (
              <section id="hero" className="d-flex align-items-center">
                <HeroSection data={allData} />
              </section>
            )}
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
};

export default Doctor;