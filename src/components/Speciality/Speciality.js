import React from "react";

const Speciality = ({ data }) => {
  return (
    <div className="container">
      <div className="s-speciality-secion" id="s-speciality-secion">
        <div className="s-speciality" id="experience">
          <div class="row">
            <h1 className="col-12">Sub-speciality</h1>
            <div className="col-12 s-speciality-container">
              {Array.isArray(data?.SubSpeciality) && data?.SubSpeciality?.length > 0 && data?.SubSpeciality?.map((item) => {
                return <div className="s-item">{item}</div>;
              })}
            </div>
          </div>
          <div class="row" style={{ marginTop: "3rem" }}>
            <h1 className="col-12">Services</h1>
            <div className="col-12 s-speciality-container">
              {Array.isArray(data?.Services) && data?.Services?.length > 0 && data?.Services?.map((item) => {
                return <div className="s-item">{item}</div>;
              })}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Speciality;
