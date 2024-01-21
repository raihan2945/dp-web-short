import React from "react";
import moment from "moment/moment";
import Carousel from "react-multi-carousel";
import { MasonryGrid } from "@egjs/react-grid";

const BlogFeedItem = ({ item }) => {
  if (item.PostType === 'normal') {
    return (
      <div class="card">
        {(item?.Images || item?.Videos || item?.Documents) && (
          <div class="card__header">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              draggable
              infinite={true}
              minimumTouchDrag={80}
              pauseOnHover
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 1
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 1
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
            >

              {item?.Images?.length > 0 &&
                item?.Images?.map((file, index) => {
                  return (
                    <img key={index}
                      alt={file?.FullName}
                      height={210}
                      width={350}
                      src={file?.FileURL}
                    ></img>
                  );
                })}

              {item?.Videos?.length > 0 &&
                item?.Videos?.map((file, index) => {
                  return (
                    <video key={index}
                      height={210}
                      width={350}
                      controls="controls" preload="metadata"
                      style={{
                        display: 'block',
                        margin: 'auto',
                        width: '100%'
                      }}>
                      <source src={file?.FileURL + "#t=0.1"} ></source>
                      Your browser does not support the video tag.
                    </video>
                  );
                })}
            </Carousel>
          </div>
        )
        }
        <div class="card__body">
          {item.Title && (
            <h4>{item.Title}</h4>
          )}
          {item.Content && (
            <p>{item.Content}</p>
          )}
        </div>
        <div class="card__footer">
          <div class="tag-container">
            {item?.Tags && item?.Tags?.map((tag, index) => {
              return (
                <span key={index} class="tag tag-blue">{tag}</span>
              );
            })}
          </div>
          <p class="time">{moment(item?.CreatedAt * 1000).fromNow()}</p>
        </div>
      </div >
    )
  } else if (item.PostType == "poll") {
    let highestVal = 0;
    item.Poll.Options.forEach((opt) => {
      if (highestVal < opt.TotalVoted) {
        highestVal = opt.TotalVoted;
      }
    });
    return (
      <div class="card">
        <div class="card__header content_padding">
          {item?.Title && (
            <h4>{item?.Title}</h4>
          )}
          {item?.Content && (
            <p>{item?.Content}</p>
          )}
        </div>
        <div class="card__body poll-bg ">
          {item?.Poll && (
            <p class="title">{item.Poll.Title}</p>
          )}
          {item.Poll.Options && (
            <div class="poll">
              {item.Poll.Options.map((opt, index) => {
                return (
                  <div key={index} class="poll-line">
                    <p for={"opt-" + index}>{opt.Value}</p>
                    <progress value={(opt.TotalVoted / item.Poll.TotalVoted * 100).toFixed(1)} max="100" class={highestVal == opt.TotalVoted ? "success" : "negative"}>
                    </progress>
                    <span class="progress-value">{(opt.TotalVoted / item.Poll.TotalVoted * 100).toFixed(0)}%</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div class="card__footer">
          <div class="tag-container">
            {item?.Tags && item?.Tags?.map((tag, index) => {
              return (
                <span key={index} class="tag tag-blue">{tag}</span>
              );
            })}
          </div>
          <p class="time">{moment(item?.CreatedAt * 1000).fromNow()}</p>
        </div>
      </div>
    )
  }
  return (
    <></>
  )
}

const BlogFeeds = ({ data }) => {
  return (
    <>
      {Array.isArray(data?.BlogFeeds) && data?.BlogFeeds?.length > 0 && (
        <MasonryGrid
          className="container"
          gap={20}
          useFit
          column={0}
          columnSize={0}
          columnSizeRatio={0}
          defaultDirection={"end"}
          align={"center"}
          onRenderComplete={e => {
            console.log(e);
          }}
        >
          {data?.BlogFeeds?.map((item, iidx) => {
            return (
              <BlogFeedItem item={item} key={iidx}></BlogFeedItem>
            )
          })}
        </MasonryGrid>
      )}
    </>
  );
};

export default BlogFeeds
