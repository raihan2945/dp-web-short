import React from "react";

const AboutUs = ({data}) => {
  return (
    <>
      {/* ======= About Video Section ======= */}
      <div className="container">
        <div className=" about-doctor">
          <h1>About Myself</h1>
          <div className="row about-text">
            <div className="col-lg-12" data-aos="fade-left" data-aos-delay={100}>
              <p className="">
                {data?.Bio}
              </p>
            </div>
            {/* <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <img
                src="images/tranparent.svg"
                className="img-fluid about-img"
                alt=""
                style={{objectFit:'contain'}}
              />
              
            </div> */}
          </div>
        </div>
      </div>
      {/* End About Video Section */}
    </>
  );
};

export default AboutUs;
