import React, { useEffect, useState } from "react";

const EducationAndTarining = ({ educations, trainings, researchs }) => {
  const [sectionShow, setSectionShow] = useState(false);

  useEffect(() => {
    if (educations && Array.isArray(educations) && educations.length > 0) {
      setSectionShow(true);
    } else if (trainings && Array.isArray(trainings) && trainings.length > 0) {
      setSectionShow(true);
    } else if (researchs && Array.isArray(researchs) && researchs.length > 0) {
      setSectionShow(true);
    }
  }, []);

  return (
    <>
      {sectionShow && (
        <div className="container">
          <div className="eduction-secion" id="eduction-secion">
            {educations && Array.isArray(educations) && educations.length > 0 && (
              <div className="education" id="eduction">
                <div class="row">
                  <h1 className="col-12">Education</h1>

                  {Array.isArray(educations) &&
                    educations?.map((item) => {
                      return (
                        <div class="col-lg-6" style={{ marginBottom: "1.5rem" }}>
                          <div
                            style={{
                              borderRadius: "5px",
                              height: "100%",
                              border: "1px solid #F0F0F2",
                            }}
                            className="rounded-lg md:mb-0 md:py-[1.4375rem] md:px-5"
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "start",
                                padding: "1.2rem",
                                gap: "1.2rem",
                              }}
                            >
                              <div style={{}} class="mt-1 items-center justify-center">
                                <span
                                  style={{
                                    background: "#EAEEF9",
                                    padding: ".7rem .5rem",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2064_10605)">
                                      <path
                                        d="M13.2833 15.8655C12.9273 16.0838 12.4715 16.2041 11.9997 16.2041C11.5278 16.2041 11.072 16.0839 10.716 15.8655L4.90443 12.3012C4.90443 12.3012 4.37988 11.9797 4.37988 12.7081C4.37988 13.5352 4.37988 16.0166 4.37988 16.0166C4.37988 16.0497 4.37988 16.2158 4.37988 16.2673C4.37988 18.1422 7.79132 20.1634 11.9995 20.1634C16.2077 20.1634 19.6191 18.1422 19.6191 16.2673C19.6191 16.2158 19.6191 16.0497 19.6191 16.0166C19.6191 16.0166 19.6191 13.3847 19.6191 12.5074C19.6191 11.9228 19.2462 12.2085 19.2462 12.2085L13.2833 15.8655Z"
                                        fill="#0032B7"
                                      ></path>{" "}
                                      <path d="M21.6651 9.46635C22.1116 9.19249 22.1116 8.74434 21.6651 8.47043L12.8119 4.04328C12.3653 3.76943 11.6346 3.76943 11.1881 4.04328L2.33491 8.47043C1.88836 8.74429 1.88836 9.19244 2.33491 9.46635L11.1881 14.8961C11.6346 15.1699 12.3653 15.1699 12.8119 14.8961" fill="#0032B7"></path>{" "}
                                      <path
                                        d="M21.299 17.5145C21.299 16.0154 21.299 11.5178 21.299 11.5178C21.299 11.5178 21.3031 11.2338 21.1346 11.3276C20.9994 11.4028 20.668 11.5876 20.5513 11.6891C20.4165 11.8063 20.4468 12.0693 20.4468 12.0693C20.4468 12.0693 20.4468 16.1532 20.4468 17.5145C20.4468 17.5918 20.3804 17.6287 20.3487 17.6474C20.0427 17.8273 19.8369 18.1594 19.8369 18.5401C19.8369 19.1123 20.3007 19.5761 20.8729 19.5761C21.4451 19.5761 21.9089 19.1123 21.9089 18.5401C21.9089 18.1579 21.7016 17.8248 21.3936 17.6453C21.363 17.6275 21.299 17.5918 21.299 17.5145Z"
                                        fill="#0032B7"
                                      ></path>
                                    </g>{" "}
                                    <defs>
                                      <clipPath id="clip0_2064_10605">
                                        <rect width="20" height="20" fill="white" transform="translate(2 2)"></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </span>
                              </div>
                              <div>
                                <h6 className="education-title">{item?.Name}</h6>
                                <p className="institute">{item?.Institution}</p>
                                <div className="coutnry-and-year" style={{ display: "flex", gap: "5px" }}>
                                  <span
                                    className="mt-1 font-sm text-xs"
                                    style={{
                                      border: "1px solid #E5E7EB",
                                      padding: "1px 6px",
                                      borderRadius: "3px",
                                      fontSize: ".8rem",
                                    }}
                                  >
                                    {item.Country}
                                  </span>
                                  <span
                                    className="mt-1 font-sm text-xs"
                                    style={{
                                      border: "1px solid #E5E7EB",
                                      padding: "1px 6px",
                                      borderRadius: "3px",
                                      fontSize: ".8rem",
                                    }}
                                  >
                                    {item?.Year}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
            {/* -----------------------Training----------------- */}
            {trainings && Array.isArray(trainings) && trainings.length > 0 && (
              <div className="training" id="training">
                <div class="row">
                  <h1 className="col-12">Training</h1>
                  {trainings?.map((item) => {
                    return (
                      <div class="col-lg-6" style={{ marginBottom: "1rem" }}>
                        <div
                          style={{
                            borderRadius: "5px",
                            height: "100%",
                            border: "1px solid #F0F0F2",
                          }}
                          className="rounded-lg border border-[#F0F0F2] md:mb-0 md:py-[1.4375rem] md:px-5"
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "start",
                              padding: "1.2rem",
                              gap: "1.2rem",
                            }}
                          >
                            <div className="mt-1 mr-3 flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-[5px] bg-[#EAEEF9] sm:mr-5 sm:h-11 sm:w-11">
                              <span
                                style={{
                                  background: "#EAEEF9",
                                  padding: ".7rem .5rem",
                                  borderRadius: "5px",
                                }}
                              >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M20.159 3.25H11.3722C10.3554 3.25 9.53125 4.07428 9.53125 5.09097V9.41913C9.99573 9.64999 10.4976 9.89963 10.966 10.1325L11.6827 8.69846C12.1167 7.8313 13.1746 7.47897 14.0414 7.91217C14.9101 8.34689 15.2621 9.40189 14.8273 10.2707L13.5497 12.8266C13.5835 13.1649 13.5535 13.5059 13.4581 13.8359H14.3016L12.0769 19.9535C11.9449 20.3163 12.2 20.7398 12.6277 20.7398C12.8668 20.7398 13.0917 20.5922 13.1781 20.3539L15.5484 13.8359H15.959L18.3534 20.3559C18.4406 20.593 18.6649 20.7398 18.9038 20.7398C19.3034 20.7398 19.5964 20.3406 19.4534 19.952L17.2073 13.8359H20.159C21.1757 13.8359 22 13.0117 22 11.995V5.09097C22 4.07428 21.1757 3.25 20.159 3.25V3.25ZM18.9035 11.3257H16.2746C15.9511 11.3257 15.6886 11.0633 15.6886 10.7398C15.6886 10.416 15.9511 10.1538 16.2746 10.1538H18.9035C19.2273 10.1538 19.4894 10.416 19.4894 10.7398C19.4894 11.0633 19.2273 11.3257 18.9035 11.3257ZM18.9035 9.12891H16.2746C15.9511 9.12891 15.6886 8.86676 15.6886 8.54297C15.6886 8.21948 15.9511 7.95703 16.2746 7.95703H18.9035C19.2273 7.95703 19.4894 8.21948 19.4894 8.54297C19.4894 8.86676 19.2273 9.12891 18.9035 9.12891ZM18.9035 6.9324H12.6277C12.3039 6.9324 12.0418 6.66995 12.0418 6.34647C12.0418 6.02298 12.3039 5.76053 12.6277 5.76053H18.9035C19.2273 5.76053 19.4894 6.02298 19.4894 6.34647C19.4894 6.66995 19.2273 6.9324 18.9035 6.9324Z"
                                    fill="#0032B7"
                                  ></path>{" "}
                                  <path
                                    d="M12.3094 13.5846C12.4153 13.2744 12.4146 12.9503 12.3252 12.6546L13.7793 9.74658C13.924 9.45712 13.8068 9.1051 13.5173 8.96045C13.228 8.81564 12.876 8.93298 12.7312 9.22244L11.491 11.7026C10.7497 11.3335 9.62344 10.7735 8.71616 10.3223C7.87204 9.90253 7.26962 9.52609 6.24179 9.52609H5.72406C6.52438 9.52609 7.23865 9.15775 7.70618 8.58127C8.06293 8.14258 8.27625 7.5835 8.27625 6.97421C8.27625 5.56445 7.13367 4.42188 5.72375 4.42188C4.31445 4.42188 3.17188 5.56445 3.17188 6.97421C3.17188 7.65125 3.43555 8.26648 3.86569 8.72302C4.33078 9.21756 4.99133 9.52609 5.7236 9.52625C4.74185 9.52625 3.78207 9.92404 3.09161 10.6163C2.38773 11.3184 2 12.2538 2 13.2502V15.1329C2 15.9435 2.52628 16.6332 3.25519 16.8785V20.1537C3.25519 20.4773 3.51749 20.7396 3.84113 20.7396H7.60669C7.93033 20.7396 8.19263 20.4773 8.19263 20.1537V13.5703C8.7482 13.848 9.47803 14.2128 10.0685 14.5082C10.4825 14.7151 10.9662 14.7338 11.3976 14.5583C11.8277 14.3813 12.1593 14.029 12.3072 13.5915C12.3079 13.5892 12.3087 13.5869 12.3094 13.5846Z"
                                    fill="#0032B7"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div>
                              <h6 className="training-title">{item?.TrainingOn}</h6>
                              <p className="institute mt-2">{item?.Institution}</p>
                              <div className="date" style={{ display: "flex", gap: "5px" }}>
                                <span
                                  className="mt-1 font-normal text-xs"
                                  style={{
                                    border: "1px solid #F0F0F2",
                                    padding: "1px 6px",
                                    borderRadius: "3px",
                                    fontSize: ".8rem",
                                  }}
                                >
                                  {item?.StartDate} - {item?.EndDate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {/* -----------------------Research Paper----------------- */}
            {researchs && Array.isArray(researchs) && researchs.length > 0 && (
              <div className="research-paper" id="research-paper">
                <div class="row">
                  <h1 className="col-12">Research Paper</h1>

                  {researchs?.map((item) => {
                    return (
                      <div class="col-lg-6" style={{ marginBottom: "1rem" }}>
                        <div
                          style={{
                            borderRadius: "5px",
                            height: "100%",
                            border: "1px solid #F0F0F2",
                          }}
                          className="rounded-lg md:mb-0 md:py-[1.4375rem] md:px-5"
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "start",
                              padding: "1.2rem",
                              gap: "1.2rem",
                            }}
                          >
                            <div className="mt-1 mr-3 flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-[5px] bg-[#EAEEF9] sm:mr-5 sm:h-11 sm:w-11">
                              <span
                                style={{
                                  background: "#EAEEF9",
                                  padding: ".7rem .5rem",
                                  borderRadius: "5px",
                                }}
                              >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_2070_11821)">
                                    <path
                                      d="M16.668 12.7031C14.1048 12.7031 12.0195 14.7884 12.0195 17.3516C12.0195 19.9147 14.1048 22 16.668 22C19.2527 22 21.3555 19.9147 21.3555 17.3516C21.3555 14.7884 19.2527 12.7031 16.668 12.7031ZM18.0946 16.7892L16.5321 18.6642C16.4201 18.7986 16.2548 18.875 16.0821 18.875C16.0596 18.875 16.0371 18.8737 16.0145 18.8711C15.818 18.8483 15.6464 18.728 15.5579 18.5511L14.9329 17.3011C14.7882 17.0117 14.9055 16.6597 15.195 16.515C15.4844 16.3702 15.8364 16.4876 15.9811 16.777L16.2054 17.2257L17.1944 16.0389C17.4016 15.7904 17.7711 15.7568 18.0196 15.9639C18.2682 16.1711 18.3018 16.5405 18.0946 16.7892Z"
                                      fill="#0032B7"
                                    ></path>{" "}
                                    <path
                                      d="M16.4154 5.33801L14.038 2.87945C14.0369 2.87828 14.0357 2.87707 14.0346 2.8759C13.4872 2.31926 12.7255 2 11.9449 2H4.40234C3.43309 2 2.64453 2.78855 2.64453 3.75781V18.9531C2.64453 19.9224 3.43309 20.7109 4.40234 20.7109H11.9176C11.244 19.7612 10.8477 18.6019 10.8477 17.3516C10.8477 14.1422 13.4586 11.5312 16.668 11.5312C16.8657 11.5312 17.0611 11.5412 17.2539 11.5603V7.38984C17.2539 6.61762 16.9561 5.88906 16.4154 5.33801ZM8.85547 15.0859H5.73047C5.40687 15.0859 5.14453 14.8236 5.14453 14.5C5.14453 14.1764 5.40687 13.9141 5.73047 13.9141H8.85547C9.17906 13.9141 9.44141 14.1764 9.44141 14.5C9.44141 14.8236 9.17906 15.0859 8.85547 15.0859ZM8.85547 11.9609H5.73047C5.40687 11.9609 5.14453 11.6986 5.14453 11.375C5.14453 11.0514 5.40687 10.7891 5.73047 10.7891H8.85547C9.17906 10.7891 9.44141 11.0514 9.44141 11.375C9.44141 11.6986 9.17906 11.9609 8.85547 11.9609ZM8.85547 8.83594H5.73047C5.40687 8.83594 5.14453 8.57359 5.14453 8.25C5.14453 7.92641 5.40687 7.66406 5.73047 7.66406H8.85547C9.17906 7.66406 9.44141 7.92641 9.44141 8.25C9.44141 8.57359 9.17906 8.83594 8.85547 8.83594ZM12.6055 11.9609H11.9805C11.6569 11.9609 11.3945 11.6986 11.3945 11.375C11.3945 11.0514 11.6569 10.7891 11.9805 10.7891H12.6055C12.9291 10.7891 13.1914 11.0514 13.1914 11.375C13.1914 11.6986 12.9291 11.9609 12.6055 11.9609ZM12.6055 8.83594H11.9805C11.6569 8.83594 11.3945 8.57359 11.3945 8.25C11.3945 7.92641 11.6569 7.66406 11.9805 7.66406H12.6055C12.9291 7.66406 13.1914 7.92641 13.1914 8.25C13.1914 8.57359 12.9291 8.83594 12.6055 8.83594Z"
                                      fill="#0032B7"
                                    ></path>
                                  </g>{" "}
                                  <defs>
                                    <clipPath id="clip0_2070_11821">
                                      <rect width="20" height="20" fill="white" transform="translate(2 2)"></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                            </div>
                            <div>
                              <h6 className="JournalName">{item?.JournalName}</h6>
                              <p className="institute">{item?.Title}</p>
                              <div className="date" style={{ display: "flex" }}>
                                <span className="mt-1 font-normal text-xs" style={{ fontSize: ".8rem" }}>
                                  {item?.PublishingDate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EducationAndTarining;
