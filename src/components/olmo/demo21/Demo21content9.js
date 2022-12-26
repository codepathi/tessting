import { VideoImage } from "../../VideoContent";

const Demo21content9 = () => {
  return (
    <div
      id="content-9"
      className="content-9 bg-snow pt-60 content-section division"
    >
      <div className="container">
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="content-9-img video-preview wow fadeInUp">
              <VideoImage
                img="images/dashboard-03.png"
                extraClass="video-btn video-btn-xl bg-pink ico-90"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default Demo21content9;
