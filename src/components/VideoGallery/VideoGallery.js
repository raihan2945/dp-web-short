import React from "react";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const VideoGallery = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const getYoutubeVideoID =(url) =>{
  //   const regex =
  //     /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  //     console.log("regex is : ", regex)
  //   return regex?.split(url.value)[3];
  // }

  function getYoutubeVideoID(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  return (
    <div className="container">
      <div className="video-gallery-section" id="video-gallery-section">
        <h1>Video Gallery</h1>
        {data?.VideoLinks && (
          <Carousel autoPlay={true} infinite={true} responsive={responsive}>
            {Array.isArray(data?.VideoLinks) &&
              data?.VideoLinks?.length > 0 &&
              data?.VideoLinks?.map((item) => {
                const videoUrl = `https://www.youtube.com/embed/${getYoutubeVideoID(item?.value)}/0.jpg?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent`;
                return (
                  <div style={{ width: "100%", height: "100%", padding: "1rem" }}>
                    <iframe width="100%" height="315" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" class="aspect-video h-full w-full rounded-lg shadow-lg"></iframe>
                  </div>
                );
              })}
            {/* <div>1</div> */}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
