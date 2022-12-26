import { Fragment, useContext } from "react";
import { VideoContext } from "../context/video";

// id = LO0U7PwNlcs
const VideoImage = ({ id, img, extraClass }) => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <Fragment>
      <a
        className="video-popup1"
        href="#"
        // onClick={() => showVideo(id ? id : "SZEflIVnhH8")}
        onClick={() => showVideo(id ? id : "LO0U7PwNlcs")}
      >
        <div
          className={
            extraClass
              ? extraClass
              : "video-btn video-btn-xl bg-orange-red ico-90"
            

          }
          // style={{ backgroundColor: "#da0819" }}
        >
          <div className="video-block-wrapper">
            <span className="flaticon-play-button"></span>
          </div>
        </div>
      </a>
      <img
        // className="img-fluid"
        className="img-fluid"

        style={{ borderRadius: "2rem",width:"80%",height:"60%" }}
        // src={img ? img : "images/dashboard-07.png"}
        src={img ? img : "assets/medias/restrox-youtube-thumnail.png"}
        alt="RestroX Youtube Video Thumbnail "
      />
    </Fragment>
  );
};

const VideoImage2 = ({ id, img, extraClass }) => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <Fragment>
      <a
        className="video-popup1"
        href="#"
        // onClick={() => showVideo(id ? id : "SZEflIVnhH8")}
        onClick={() => showVideo(id ? id : "LO0U7PwNlcs")}
      >
        <div className="video-btn video-btn-xl bg-orange-red ico-90">
          <div className="video-block-wrapper">
            <span className="flaticon-play-button"></span>
          </div>
        </div>
      </a>
      {/* <img
        className="img-fluid"
        src="/images/img-01.png"
        alt="video-preview"
      ></img> */}
    </Fragment>
  );
};

const VideoWithBtn = ({ id, extraClass, defText }) => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <a
      href="#"
      className={
        extraClass
          ? extraClass
          : "video-popup2 btn btn-md btn-transparent ico-20 ico-left"
      }
      style={{color:"black"}}
      // onClick={() => showVideo(id ? id : "7e90gBu4pas")}
      onClick={() => showVideo(id ? id : " LO0U7PwNlcs")}
    >
      <span className="flaticon-play"></span>{" "}
      {defText ? defText : "See RestroX in Action"}
    </a>
  );
};

export { VideoImage, VideoWithBtn, VideoImage2 };
